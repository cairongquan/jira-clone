const sqlite3 = require('sqlite3').verbose()

module.exports = class ProjectDbService {
    constructor(filePath) {
        this.db = new sqlite3.Database(filePath)
    }

    insert() {
        this.db.run('INSERT INTO test_tbl (title,name,age) VALUES ("唱歌","周润发","47")', (message) => {
            console.log(message)
        })
    }
}
