const path = require('path')
const ProjectDbService = require('./lib/db.service')
const projectInfoSchema = require('./DB/Project.schema')

const express = require('express')

const ProjectInfoControll = new ProjectDbService(path.join(__dirname, './DB/Project.info.db'), 'project_info', projectInfoSchema)

const app = express()

app.use(express.json())
app.use('/project', require('./router/project.router'))


const {
  port
} = require('./config/main.config.json')
app.listen(port, () => {
  console.log(`listen in ${port}`)
})
