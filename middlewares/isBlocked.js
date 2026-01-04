const { users } = require("../model")

exports.isBlocked = async(req,res,next)=>{
    const email = req.body.email
    const user = await users.findOne({where:{email}})
    if(!user){
        return res.send('Invalid user')
    }
    if(!user.blockstatus)
    {
        return res.send("You are blocked")
    }
    next();
}