const jwt = require('jsonwebtoken')
const {promisify} = require("util")
const { users } = require("../model")

exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken
    if (!token) return res.redirect('/login')

    const verified = await promisify(jwt.verify)(token, 'hahaha')
    const user = await users.findByPk(verified.id)

    if (!user) {
      // stop execution here
      return res.status(403).send("Invalid user")  // ✅ return stops function
    }

    req.userId = verified.id
    next()
  } catch (err) {
    console.log(err.message)
    return res.redirect('/login')  // ✅ return stops function
  }
}
