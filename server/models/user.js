const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  admin: { type: String, required: true, default: false },
  private: { type: String, required: true, default: false },
  createdAt: {type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)

module.exports = User
