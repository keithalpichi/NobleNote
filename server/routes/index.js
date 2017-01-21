const routes = require('express').Router()
const users = require('./users/index')
const registrations = require('./registrations')
const sessions = require('./sessions')
const authentication = require('./authentication')

routes.use('/', () => console.log('\n--- Request to api\n'))
routes.use('registrations', registrations)
//routes.use(authentication)
routes.use('sessions', sessions)
routes.use('users', users)

module.exports = routes
