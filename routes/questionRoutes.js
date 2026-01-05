const router = require('express').Router()
const { renderAskQuestionPage, askQuestion } = require('../controller/questionController')
const { isAuthenticated } = require('../middlewares/isAuthenticated')

router.route('/askquestion').get(isAuthenticated,renderAskQuestionPage).post(askQuestion)



module.exports = router