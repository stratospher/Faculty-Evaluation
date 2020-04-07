module.exports = function(sequalize,DataTypes){
	const College = sequalize.define('college',{
		col_code:{
			type:DataTypes.STRING(10),
			PrimaryKey: true,
		},
		col_name:{
             type:DataTypes.STRING(100),

		},
	});
	return College;
};