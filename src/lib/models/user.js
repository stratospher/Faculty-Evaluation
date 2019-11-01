module.exports=function(sequelize,DataTypes)
 const Classes = sequelize.define('classes', {
    col_code: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      autoIncrement: true,
    },
    dep_code:{
      type: DataTypes,STRING(3),
    },
    evalname:{
       type: DataTypes,STRING(10),
    }, 
    usrcode: {
      type: DataTypes.STRING(15),
    },
    passwd:{
      type: DataTypes,STRING(32),
    },
    name:{
       type: DataTypes,STRING(50),
    },
    usrcode: {
      type: DataTypes.STRING(10),
    },
    passwd:{
      type: DataTypes,STRING(10),
    },
    name:{
       type: DataTypes,STRING(10),
    },
 });

