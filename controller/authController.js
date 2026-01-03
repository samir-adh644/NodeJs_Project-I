const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { users } = require("../model")
const session = require("express-session");
const flash = require("connect-flash");


exports.renderHomePage =(req,res)=>{
    const [inSuccess]= req.flash('inSuccess')
    res.render('homePage',{success:inSuccess})
}


exports.renderRegisterPage = (req,res)=>{
    const [errorR] = req.flash('errorR')
    res.render('auth/register',{errorR})
}


exports.renderLoginPage = (req,res)=>{
    const [outSuccess] = req.flash('outSuccess')
    const [error] = req.flash('error')
    res.render('auth/login',{success:outSuccess,error})
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
        req.flash('errorR','Already Registered')
        res.redirect('/register')
    }

    await users.create({
        username:username,
        email:email,
        password:bcrypt.hashSync(password,5),
     
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
            req.flash('inSuccess','Logged In Successfully')
            res.redirect('/')

            
        }
        else{
             req.flash('error','Email or password incorrect')
             res.redirect("/login")
        }
    }

    else{
         req.flash('error','Email or password incorrect')
             res.redirect("/login")
    }
    
}

exports.handleLogOutPage = (req,res)=>{
    res.clearCookie('jwtToken')
    req.flash('outSuccess','Logged Out Successfully')
    res.redirect("/login")
}