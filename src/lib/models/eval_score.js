module.exports=function(sequelize,DataTypes){
	const evalscore=sequelize.define('evalscore',{
		col_code:{
			type:DataTypes.STRING(3)
		},
		dep_code:{
			type:DataTypes.STRING(3)
		},
		subcode:{
			type:DataTypes.STRING(7)
		},
		subname:{
			type:DataTypes.STRING(50)
		},
		period:{
			type:DataTypes.STRING(30)
		},
		teacher_name:{
			type:DataTypes.STRING(50)
		},
		students:{
			type:DataTypes.INTEGER()
		},
		score:{
			type:DataTypes.DOUBLE(10,5)
		},

	});
	return evalscore;


};