const { users } = require("../model")

exports.renderAdminControl = async(req,res)=>{
    const data = await users.findAll()
    res.render('admin/admincontrol',{data})

}

exports.blockHandle = async (req,res)=>{
    await users.update(
        {
            blockstatus: 0
        },
         { where: { id: req.params.id } }
    )
    res.send("User Blocked")
}

exports.unblockHandle = async (req,res)=>{
    await users.update(
        {
            blockstatus: 1
        },
         { where: { id: req.params.id } }
    )
    res.send("User Unblocked")
}