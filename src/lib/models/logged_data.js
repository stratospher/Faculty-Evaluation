module.exports = function(sequalize,DataTypes){
	const Logged_Data = sequalize.define('logged_data',{
		col_code: {
			type:DataTypes.STRING(3),

		},
		dep_code: {
			type:DataTypes.STRING(3),
			
		},
		evalname: {
			type:DataTypes.STRING(30),
			
		},
		rollno: {
			type:DataTypes.STRING(15),
			
		},
		subcode: {
			type:DataTypes.STRING(7),
			
		},
	});
	return Logged_Data;
}