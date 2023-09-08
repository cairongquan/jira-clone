const path = require('path')
const ProjectDbService = require('./lib/db.service')
const projectInfoSchema = require('./DB/Project.schema')

const DBControl = new ProjectDbService(path.join(__dirname, './DB/Project.info.db'), 'test_tbl', projectInfoSchema)

DBControl.insert({
  id: ', ',
  title: ', ',
  name: ', ',
  age: ''
}).then(res => {
  console.log('success')
}).catch(() => {
  console.log('err')
})
