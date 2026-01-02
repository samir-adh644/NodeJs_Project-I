const express = require("express");
const authRoute = require('./routes/authRoutes');
const app = express()
const PORT = 3000;

// external shits
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const session = require("express-session");
const flash = require("connect-flash");
require("./model/index")



// always set it up in node start
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// always set it up in node end

// flash setup start
    app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
    }));
    app.use(flash());
// flash setup end


// using routes start
app.use('/',authRoute)
// using routes end





app.use(express.static('public/css/'));//accessing css file at public

app.listen(PORT,(req,res)=>{
    console.log("Server Started my friend!")
})