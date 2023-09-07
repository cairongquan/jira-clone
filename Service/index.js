const path = require('path')
const ProjectDbService = require('./lib/db.service')

const DBControl = new ProjectDbService(path.join(__dirname, './DB/Project.info.db'))

DBControl.insert()
