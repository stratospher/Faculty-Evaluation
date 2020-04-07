module.exports = function(sequalize,DataTypes){
	const Department = sequalize.define('department',{
		dep_code:{
			type:DataTypes.STRING(20),
			primaryKey: true,
		},
		dep_name:{
			type:DataTypes.STRING(50),
		},
	});
	return Department;
};