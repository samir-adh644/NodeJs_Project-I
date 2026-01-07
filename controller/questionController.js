const { questions, users, answers } = require("../model")
const session = require("express-session");
const flash = require("connect-flash");
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

exports.showQuestion = async(req,res)=>{
    // const [inSuccess]= req.flash('inSuccess') //,{success:inSuccess}
    const allQuestion = await questions.findAll({
        include:{
            model:users,
            attributes:["id","username"]

        }
    })
    res.render('homepage',{allQuestion})
}

exports.showSingleQuestionPage = async(req,res)=>{
    const id = req.params.id
    const question = await questions.findByPk(id,{include:users})

    const answerData = await answers.findAll({
        where:{
            questionId:id
        },
        include:[{
            model:users,
            attributes:['username']
        }]
    })

    res.render('questions/singlequestion',{question,answers:answerData})
}

