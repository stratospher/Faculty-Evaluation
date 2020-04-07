module.exports=function(sequelize,DataTypes){
 const scores = sequelize.define('scores', {
   id:{
     type:DataTypes.INTEGER,
     autoincrement:true,
     primaryKey: true,
   },
    questionnumer: {
      type: DataTypes.INTEGER,

    },
    options:{
      type: DataTypes.STRING(3),
    },
   
    weightage: {
      type: DataTypes.STRING(15),
      
    },
    
    
   
 });
 return scores;
};
