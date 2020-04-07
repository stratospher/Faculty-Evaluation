const Promise = require('bluebird');
const models = require('../models');
const Sequelize= require('sequelize');
var {sequelize} = models;
 
 // console.log(models)

 const classMethods={};
 classMethods.evtable = function(info,obj1){
 	console.log("Inside evtable")
 	return new Promise((resolve,reject) =>
 	{
		 var evtable = {}
		 evtable.studentid=sess.userId
		 evtable.sub=info.subject
		 //evtable.subid=info.subid
		 evtable.facname=info.facname
		 evtable.q1=obj1[1]
		 evtable.q2=obj1[2]
		 evtable.q3=obj1[3]
		 evtable.q4=obj1[4]
		 evtable.q5=obj1[5] 
		 evtable.q6=obj1[6]
		 evtable.q7=obj1[7]
		 evtable.q8=obj1[8]
		 evtable.q9=obj1[9]
		 evtable.q10=obj1[10]
		 evtable.q11=obj1[11]
		 //evtable.q12=
		 //evtable.q13=info.q13
        models.evtable.create(evtable)
 		.then(res=>{
 			resolve(res);
 		})
 		.catch(err=>{
 			reject(err);
 		})
	 })
	 
	}

	classMethods.getsubjectandfaculty = function(depId){
		return new Promise((resolve,reject)=>{
			models.evtable.findAll(
				{
			
			   raw: true,	 
			   where : {depId : sess.depId},
			   attributes:[[sequelize.fn('DISTINCT',sequelize.col('sub',)),'sub']],
			   
			   })
			.then((res)=>{
				resolve(res);
				//console.log("heee")
			}).catch((err)=>{
				reject(err);
			})
		})
	}
	classMethods.getSubjectrow = function(depId,info){
		console.log(info)
		return new Promise((resolve,reject)=>{
			models.evtable.findAll(
				{

			   raw: true,	 
			   where : {depId : sess.depId,sub : info.sub},
			   attributes:['sub','facname','q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11'],
			   
			   })
			.then((res)=>{
				resolve(res);
				//console.log("heee")
			}).catch((err)=>{
				reject(err);
			})
		})
	}
	 module.exports = classMethods

