const router = require('express').Router()
const { renderAskQuestionPage, askQuestion, showQuestion, showSingleQuestionPage } = require('../controller/questionController')
const { isAuthenticated } = require('../middlewares/isAuthenticated')

router.route('/askquestion').get(isAuthenticated,renderAskQuestionPage).post(isAuthenticated,askQuestion)
router.route('/').get(showQuestion)

router.route("/singlequestion/:id").get(showSingleQuestionPage)

module.exports = router