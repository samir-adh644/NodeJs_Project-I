const { renderAdminControl, blockHandle, unblockHandle } = require('../controller/adminController')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
const { isAdmin } = require('../middlewares/isAdmin')

const router = require('express').Router()

router.route('/admincontrol').get(isAuthenticated,isAdmin,renderAdminControl)
router.route('/block/:id').post(blockHandle)
router.route('/unblock/:id').post(unblockHandle)



module.exports = router