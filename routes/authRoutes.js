const { renderLoginPage, renderHomePage, renderRegisterPage, handleRegisterPage } = require('../controller/authController')

const router = require('express').Router()


router.route('/').get(renderHomePage)
router.route('/register').get(renderRegisterPage).post(handleRegisterPage)
router.route('/login').get(renderLoginPage)



module.exports = router