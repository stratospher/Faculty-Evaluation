const Promise = require('bluebird');
const models = require('../models');
const Sequelize= require('sequelize');
var {sequelize} = models;
 
 // console.log(models)

 const classMethods={};
 classMethods.addclass = function(info){
 	//console.log(info)
 	return new Promise((resolve,reject) =>
 	{
		 var addclass = {}
		addclass.depId=sess.depId
 		addclass.classname=info.classname
 		addclass.period=info.period
        models.addclass.create(addclass)
 		.then(res=>{
 			resolve(res);
 		})
 		.catch(err=>{
			 reject(err.message);
			 
			 //reject(err);
 		})
 	})
 }

 classMethods.getClassByDepId = function(depId){
 	return new Promise((resolve,reject)=>{
 		models.addclass.findAll(
			 {
			raw: true,	 
			where : {depId : depId},
			attributes:['classname'],
			
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