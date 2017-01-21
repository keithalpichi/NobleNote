const User = require('../../models/user')

module.exports = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) res.json({error: 'User coud not be deleted'})
    user.remove(() => res.json({message: 'User deleted'}))
  })
}
