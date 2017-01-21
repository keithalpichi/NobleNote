const User = require('../../models/user')

module.exports = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (req.body._id) delete req.body._id
    for(let p in req.body) user[p] = req.body[p]
    user.save((err) => {
      if (err) res.status(500).json({error: 'Cannot update the user'})
      res.json(user)
    })
  })
}
