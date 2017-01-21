const User = require('../../models/user')

module.exports = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) res.status(404).json({error: 'User not found'})
    res.json(user).status(200)
  })
}
