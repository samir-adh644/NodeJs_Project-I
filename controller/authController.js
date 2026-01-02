const bcrypt = require('bcrypt')
// const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
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

exports.handleLoginPage = async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password ){
        return res.send("Please provide email and password")
    }

    const [data]= await users.findAll({
        where:{
            email:email
        }

    })
    if(data){
        const isMatched = bcrypt.compareSync(password,data.password)
        if(isMatched){
            const token = jwt.sign({id: data.id},'Okay',{
                expiresIn:'30d'
            })
            
            res.cookie('jwtToken',token)
            res.redirect('/')

            
        }
        else{
            res.send("Email or Password Incorrect")
        }
    }
    
}