const sessions = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const logIn = (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if (err) throw err
    if (!user) res.json({error: 'Authentication failed. User with username not found'})
    if (user) {
      if (user.password !== req.body.password) res.json({error: 'Authentication failed. Wrong password'})
      else {
        let token = jwt.sign(user, process.env.APP_SECRET, { expiresIn: '30d'})
        res.json({user: user, token: token})
      }
    }
  })
}

sessions.post('/', logIn)

module.exports = sessions
