const sqlite3 = require("sqlite3").verbose();
const getSchemaToStructure = require('./getSchemaToStructure')

module.exports = class ProjectDbService {
  constructor(dbFilePath, tableName, schema) {
    this.db = new sqlite3.Database(dbFilePath);
    this.tableName = tableName
    if (typeof schema !== 'object') throw 'Schema is required'
    try {
      this.schemaString = getSchemaToStructure(schema)
    } catch (err) {
      throw err
    }
    ProjectDbService.overwriteDbEvents(this);
    // 根据scheStructure 创建table 如果存在则放弃创建
    ProjectDbService.isTableAlready(this).then(resolve => {
      if (resolve === undefined) {
        ProjectDbService.createTable(this).then(res => {
          console.log(res)
        }).catch(err => {
          throw err
        })
      }
    })
  }

  static async createTable(example) {
    return example.db.run(`CREATE TABLE ${example.tableName} (${example.schemaString})`)
  }

  static async isTableAlready(example) {
    return example.db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='${example.tableName}'`)
  }

  static overwriteDbEvents(example) {
    const run = example.db.run;
    const each = example.db.each;
    const get = example.db.get;
    // run
    example.db.run = function (sqlValue) {
      return new Promise((resolve, reject) => {
        run.call(example.db, sqlValue, (message, data) => {
          if (message === null) return resolve(data);
          reject(message);
        });
      });
    };
    // each
    example.db.each = function (sqlValue) {
      const tempEachList = []
      return new Promise((resolve) => {
        each.call(example.db, sqlValue, (message, data) => {
          tempEachList.push(message || data)
        }, (data) => {
          resolve(tempEachList)
        });
      })
    };
    // get
    example.db.get = function (sqlValue) {
      return new Promise((resolve, reject) => {
        get.call(example.db, sqlValue, (err, message) => {
          if (err === null) {
            resolve(message)
          } else {
            reject(err)
          }
        })
      })
    }
  }

  async insert(data) {
    if (typeof data !== 'object') return Promise.reject()

    // 字段匹配 (暂时不用)
    // const keys = await this.db.each(`PRAGMA table_info(${this.tableName})`).then(res => {
    //   return res.map(item => item.name)
    // })
    // if (keys.some(item => !Object.keys(data).includes(item))) return Promise.reject()
    // await this.db
    //   .run(`INSERT INTO test_tbl VALUES ("${uuid()}","唱歌","周润发","47");`)
    // return Promise.resolve()
  }
};
