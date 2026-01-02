const { renderLoginPage, renderHomePage, renderRegisterPage } = require('../controller/authController')

const router = require('express').Router()


router.route('/').get(renderHomePage)
router.route('/register').get(renderRegisterPage)
router.route('/login').get(renderLoginPage)



module.exports = router