module.exports=function(sequelize,DataTypes){
    const addclass = sequelize.define('addclass', {
       classname: {
         type: DataTypes.STRING(7),
         primaryKey:true,
       },
       status:{
         type: DataTypes.STRING(7),
       },
      
       depId: {
         type: DataTypes.STRING(15),
         
       },
       period:{
         type: DataTypes.STRING(32),
       },
       
       
      
    });
    return addclass;
   };
   