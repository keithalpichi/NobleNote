const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let token = req.body.token || req.query.token || req.header['x-access-token'] || req.header['Authorization']
  if (token) {
    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
      if (err) return res.json({error: 'Failed to authenticate token'})
      else {
        req.decoded = decoded
        next()
      }
    })
  } else return res.status(403).json({error: 'No token provided'})
}
