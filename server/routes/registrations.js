const registrations = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const newUser = (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if (err) throw err
    if (user) res.json({error: 'Username already exists'})
    else {
      let newUser = new User(req.body)
      newUser.save((err) => {
        if (err) res.status(500).json({error: 'Could not register account'})
        let token = jwt.sign(newUser, process.env.APP_SECRET, { expiresIn: '30d'})
        res.json({user: newUser, token: token})
      })
    }
  })
}

registrations.post('/', newUser)

module.exports = registrations
