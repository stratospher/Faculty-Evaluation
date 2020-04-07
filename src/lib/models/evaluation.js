module.exports=function(sequelize,DataTypes){
 const Evaluation = sequelize.define('evaluation', {
    col_code: {
      type: DataTypes.STRING(3),
      
    },
    dep_code:{
      type: DataTypes.STRING(3),
    },
    evalname:{
       type: DataTypes.STRING(10),
    },
    subcode:{
       type: DataTypes.STRING(7),
    },
    subname:{
       type: DataTypes.STRING(50),
    },
    period:{
       type: DataTypes.STRING(30),
    },
    teacher_name:{
       type: DataTypes.STRING(50),
    },
    ans1:{
       type: DataTypes.INTEGER(10),
    },
    ans2:{
       type: DataTypes.INTEGER(10),
    },
    ans3:{
       type: DataTypes.INTEGER(10),
    },
    ans4:{
       type: DataTypes.INTEGER(10),
    },
    ans5:{
       type: DataTypes.INTEGER(10),
    },
    ans6:{
       type: DataTypes.INTEGER(10),
    },
    ans7:{
       type: DataTypes.INTEGER(10),
    },
    ans8:{
       type: DataTypes.INTEGER(10),
    },
    ans9:{
       type: DataTypes.INTEGER(10),
    },
    ans10:{
       type: DataTypes.INTEGER(10),
    },
    ans11:{
       type: DataTypes.INTEGER(10),
    },
    ans12:{
       type: DataTypes.STRING(100),
    },
    ans13:{
       type: DataTypes.STRING(100),
    },
  });
 return Evaluation;
};








