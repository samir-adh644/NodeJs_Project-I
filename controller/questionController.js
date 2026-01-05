const { questions } = require("../model")

exports.renderAskQuestionPage =(req,res)=>{
    res.render('questions/askquestion')
}

exports.askQuestion = async(req,res)=>{
    const {title,description}=req.body
    const userId = req.userId;
    if(!title || !description){
        return res.send("Enter Title and Description")
    }

    await questions.create({
        title,
        description,
        userId

    })
    res.redirect('/')
}
