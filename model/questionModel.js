const makeQuestionTable = (sequelize,DataTypes)=>{
    const question =  sequelize.define('question',{
         title : {
             type : DataTypes.STRING, 
             allowNull : false
         }, 
         description : {
             type : DataTypes.TEXT, 
             allowNull : false
         }, 
         userId: {                  
            type: DataTypes.INTEGER,
            allowNull: false
        }

     })
     return question
 }
 
 module.exports = makeQuestionTable