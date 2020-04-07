module.exports = function(sequalize,DataTypes){
	const evtable= sequalize.define('evtable',{
		studentid: {
			type:DataTypes.STRING(3),
			

		},
		depId:{
            type:DataTypes.STRING(5),
		},
		sub: {
			type:DataTypes.STRING(30),
			
		},
		period: {
			type:DataTypes.STRING(30),
			
		},
		facname: {
			type:DataTypes.STRING(15),
			
		},
		q1: {
			type:DataTypes.FLOAT,
			
		},
		q2:{
             type:DataTypes.FLOAT,
		},
		q3: {
			type:DataTypes.FLOAT,
			
		},
		q4:{
             type:DataTypes.FLOAT,
		},
		q5: {
			type:DataTypes.FLOAT,
			
		},
		q6:{
             type:DataTypes.FLOAT,
		},
		q7: {
			type:DataTypes.FLOAT,
			
		},
		q8:{
             type:DataTypes.FLOAT,
		},
		q9: {
			type:DataTypes.FLOAT,
			
		},
		q10:{
             type:DataTypes.FLOAT,
		},
		q11: {
			type:DataTypes.FLOAT,
			
		},
		q12:{
             type:DataTypes.FLOAT,
		},
		q13: {
			type:DataTypes.FLOAT,
			
		},
	
	});
	return evtable;
}