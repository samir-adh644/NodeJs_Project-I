const { renderLoginPage, renderHomePage, renderRegisterPage, handleRegisterPage, handleLoginPage, handleLogOutPage } = require('../controller/authController')

const router = require('express').Router()
const { isBlocked } = require('../middlewares/isBlocked')

// router.route('/').get(renderHomePage)
router.route('/register').get(renderRegisterPage).post(handleRegisterPage)
router.route('/login').get(renderLoginPage).post(isBlocked,handleLoginPage)
router.route('/logout').get(handleLogOutPage)


module.exports = router