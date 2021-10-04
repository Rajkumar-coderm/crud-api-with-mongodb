const jwt = require("jsonwebtoken")
require('dotenv').config()

exports.authenticateToken = (req, res, next) => {
  if (req.headers.cookie == undefined) {
    console.log({ message: 'Token not found' });
    return res.status(403).json({ message: 'TOken not found' })
  }
  const token = req.headers.cookie.split('=')[1]
  jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err) {
      console.log({ message: "JWT expired" });
      return res.status(401).json({ message:"JWT Token exprire"})
    }
    req.data=data
    next()
  });

}