const makeAdminTable = (sequelize,DataTypes)=>{
    const Admin =  sequelize.define('admin',{
         adminname : {
             type : DataTypes.STRING, 
             allowNull : false
         }, 
         password : {
             type : DataTypes.STRING, 
             allowNull : false
         }, 

     })
     return Admin
 }
 
 module.exports = makeAdminTable