const expressRouter = require('express').Router
const Router = expressRouter()

Router.post('/add', (req, res) => {
  console.log(req.body, 'req.body')
})

module.exports = Router
