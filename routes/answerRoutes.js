const { handleAnswer } = require("../controller/answerController")
const { isAuthenticated } = require("../middlewares/isAuthenticated")

const router = require("express").Router()

router.route("/answers/:id").post(isAuthenticated,handleAnswer)

module.exports = router
