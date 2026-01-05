const makeAnswerTable = (sequelize,DataTypes)=>{
    const answer =  sequelize.define('answer',{
         description : {
             type : DataTypes.STRING, 
             allowNull : false
         }, 

     })
     return answer
 }
 
 module.exports = makeAnswerTable