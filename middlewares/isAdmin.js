const { users } = require("../model")

exports.isAdmin = async(req,res,next)=>{
    const user = await users.findByPk(req.userId)
    if(!user){
        return res.send('Invalid user')
    }
    if(user.role !== 'admin')
    {
        res.send("Access denied: You dont have control over admin panel")
    }
    next();
}