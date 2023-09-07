const sqlite3 = require("sqlite3").verbose();
const uuid = require('uuid').v1

module.exports = class ProjectDbService {
  constructor(dbFilePath, tableName) {
    this.db = new sqlite3.Database(dbFilePath);
    this.tableName = tableName
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
    await this.db.run(
      "create table if not exists test_tbl (id integer,title,name,age not null);"
    );
    this.db.each('PRAGMA table_info(test_tbl)').then(resolve => {
      console.log(resolve, 111)
    })
    await this.db
      .run(`INSERT INTO test_tbl VALUES ("${uuid()}","唱歌","周润发","47");`)
  }
};
