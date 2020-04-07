module.exports=function(sequelize,DataTypes){
 const users = sequelize.define('users', {
    colId: {
      type: DataTypes.STRING(3),

    },
    depId:{
      type: DataTypes.STRING(3),
    },
   
    userId: {
      type: DataTypes.STRING(15),
      primaryKey: true,
    },
    passwd:{
      type: DataTypes.STRING(32),
    },
    usertype: {
      type: DataTypes.STRING(20),
    },
    classname: {
      type: DataTypes.STRING(20),
    },
    
   
 });
 return users;
};

