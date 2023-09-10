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
    this.overwriteDbEvents();
    // 根据scheStructure 创建table
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

  overwriteDbEvents() {
    const run = this.db.run;
    const each = this.db.each;
    const get = this.db.get;
    // run
    this.db.run = function (sqlValue) {
      return new Promise((resolve, reject) => {
        run.call(this, sqlValue, (message, data) => {
          if (message === null) return resolve(data);
          reject(message);
        });
      });
    };
    // each
    this.db.each = function (sqlValue) {
      const tempEachList = []
      return new Promise((resolve) => {
        each.call(this, sqlValue, (message, data) => {
          tempEachList.push(message || data)
        }, (data) => {
          resolve(tempEachList)
        });
      })
    };
    // get
    this.db.get = function (sqlValue) {
      return new Promise((resolve, reject) => {
        get.call(this, sqlValue, (err, message) => {
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