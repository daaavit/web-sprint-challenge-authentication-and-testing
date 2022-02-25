const { JWT_SECRET } = require('../secrets')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return next({
      stastus: 401,
      message: 'token required'
    })

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({
        status: 401,
        message: 'Not valid TOKENS'
      })
    } else {
      req.decodedToken = decodedToken;
      next()
    }
  })
  next();


};
