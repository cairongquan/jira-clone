const path = require('path')
const ProjectDbService = require('./lib/db.service')
const projectInfoSchema = require('./DB/Project.schema')

const DBControl = new ProjectDbService(path.join(__dirname, './DB/Project.info.db'), 'project_info', projectInfoSchema)