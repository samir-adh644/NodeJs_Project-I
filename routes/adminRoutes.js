const { renderAdminControl } = require('../controller/adminController')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
const { isAdmin } = require('../middlewares/isAdmin')

const router = require('express').Router()

router.route('/admincontrol').get(isAuthenticated,isAdmin,renderAdminControl)




module.exports = router