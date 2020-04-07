module.exports = function(sequalize,DataTypes){
	const addsubject= sequalize.define('addsubject',{
		id:{
			type:DataTypes.INTEGER,
			primaryKey:true,
		},
		deptid: {
			type:DataTypes.STRING(3),
			

		},
		subid: {
			type:DataTypes.STRING(3),
			
		},
		subname: {
			type:DataTypes.STRING(30),
			
		},
		facname: {
			type:DataTypes.STRING(15),
			
		},
		facid: {
			type:DataTypes.STRING(7),
			
		},
		classname:{
             type:DataTypes.STRING(7),
		},
	});
	// addsubject.associate = function(models) {
	// 	addsubject.belongsTo(models.addclass,{foreignKey:'classname',targetKey:'classname'})
	//    };
	return addsubject;
}