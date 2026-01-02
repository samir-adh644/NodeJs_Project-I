const express = require("express")
const app = express()
const PORT = 3000;
require("./model/index")
app.set('view engine','ejs')//setting up ejs



app.get('/',(req,res)=>{
    res.render('homePage')
})






app.use(express.static('public/css/'));//accessing css file at public

app.listen(PORT,(req,res)=>{
    console.log("Server Started my friend!")
})