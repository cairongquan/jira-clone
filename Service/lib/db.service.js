const sqlite3 = require("sqlite3").verbose();
const uuid = require('uuid').v1

const getSchemaToStructure = require('./getSchemaToStructure')

module.exports = class ProjectDbService {
  constructor(dbFilePath, tableName, schema) {
    this.db = new sqlite3.Database(dbFilePath);
    this.tableName = tableName
    if (typeof schema !== 'object') throw 'schema is required'
    this.schemaString = getSchemaToStructure(schema)
    this.overwriteDbEvents();
  }

  overwriteDbEvents() {
    const run = this.db.run;
    const each = this.db.each;
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
