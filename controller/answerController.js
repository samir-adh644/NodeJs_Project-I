const { answers } = require("../model")

exports.handleAnswer = async(req,res) =>{
    const userId = req.userId
    const {answer}=req.body
    const {id:questionId}=req.params
    await answers.create({
        description : answer,
        userId,
        questionId,
    })

    res.redirect(`/singlequestion/${questionId}`)

}