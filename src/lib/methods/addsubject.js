const Promise = require('bluebird');
const models = require('../models');
const Sequelize= require('sequelize');
var {sequelize} = models;
 
 // console.log(models)

 const classMethods={};
 classMethods.addsubject = function(info){
 	
 	return new Promise((resolve,reject) =>
 	{
		console.log(info)
		 console.log("krishna")
 		var subject = {}
		 subject.classname=info.classname
		 //subject.classname = 
 		subject.deptid=sess.depId
 		subject.subid=info.subid
 		subject.facid=info.facid
 		subject.subname=info.subname
		 subject.facname=info.facname
		 console.log(subject)
        models.addsubject.create(subject)
 		.then(res=>{
			// console.log(res)
 			resolve(res);
 		})
 		.catch(err=>{
 			reject(err);
 		})
 	})
 }

 classMethods.getsubjectbyclass = function(classname){
	return new Promise((resolve,reject)=>{
		models.addsubject.findAll(
			{
		   raw: true,	 
		   where : {classname : classname},
		   attributes:['subname'],
		   
		   })
		.then((res)=>{
			resolve(res);
			//console.log("heee")
		}).catch((err)=>{
			reject(err);
		})
	})
}

classMethods.getFaculty = function(subject){
	//Should return the faculty name of subject
	return new Promise((resolve,reject)=>{
		models.addsubject.findOne(
			{
				raw: true,
				where :{subname : subject},
				attributes:['facname','subid','facid']
			}
		)
		.then((res)=>{
			resolve(res);
		}).catch((err)=>{
			reject(err);
		})
	})
}

 module.exports = classMethods