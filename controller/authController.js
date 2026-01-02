const { hashSync } = require("bcrypt")
const { users } = require("../model")

exports.renderHomePage =(req,res)=>{
    res.render('homePage')
}


exports.renderRegisterPage = (req,res)=>{
    res.render('auth/register')
}


exports.renderLoginPage = (req,res)=>{
    res.render('auth/login')
}

exports.handleRegisterPage = async(req,res)=>{
    const {username,email,password}=req.body
    if(!username || !email || !password){
        return res.send("Please Provide All Data....")
    }

    const data = await users.findAll({
        where:{
            email:email
        }
    })
    if(data.length>0){
        return res.send("Already registered email")
    }

    await users.create({
        username:username,
        email:email,
        password:hashSync(password,5),
     
    })

    res.redirect('/login')
}