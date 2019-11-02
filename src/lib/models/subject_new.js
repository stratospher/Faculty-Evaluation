module.exports = function(sequalize,DataTypes){
	const Subject_New = sequalize.define('subject_new',{
		col_code:{
			type:DataTypes.STRING(3),
		},
		dep_code:{
			type:DataTypes.STRING(3),
		},
		evalname:{
			type:DataTypes.STRING(10),
		},
		subcode:{
			type:DataTypes.STRING(7),
		},
		elective:{
			type:DataTypes.STRING(10),
		},
		subname:{
			type:DataTypes.STRING(60),
		},
		teacher_name:{
			type:DataTypes.STRING(50),
		},
	});
	return Subject_New;
}