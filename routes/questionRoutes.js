const router = require('express').Router()
const { renderAskQuestionPage, askQuestion, showQuestion } = require('../controller/questionController')
const { isAuthenticated } = require('../middlewares/isAuthenticated')

router.route('/askquestion').get(isAuthenticated,renderAskQuestionPage).post(isAuthenticated,askQuestion)
router.route('/').get(showQuestion)


module.exports = router