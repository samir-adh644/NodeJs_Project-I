exports.renderHomePage =(req,res)=>{
    res.render('homePage')
}


exports.renderRegisterPage = (req,res)=>{
    res.render('auth/register')
}


exports.renderLoginPage = (req,res)=>{
    res.render('auth/login')
}