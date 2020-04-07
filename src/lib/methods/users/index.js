
const Promise = require('bluebird');
const models = require('../../models');
const Sequelize= require('sequelize');
var {sequelize} = models;
 
 // console.log(models)

 const userMethods={};
 userMethods.addUser = function(info){
 	console.log(info)
 	return new Promise((resolve,reject) =>
 	{
 		var users = {}
 		users.userId=info.userId
 		users.usertype=info.usertype
 		users.colId=info.col_code
 		users.depId=info.dep_code
 		users.passwd=info.passwd
        models.users.create(users)
 		.then(res=>{
 			resolve(res);
 		})
 		.catch(err=>{
 			reject(err);
 		})
 	})
 }

 userMethods.bulkAdd = function(info){
	 
	return new Promise((resolve,reject) => {
		models.users.bulkCreate(info).then(() => { 
			return models.users.findAll();
			}).then(users => {
				resolve(users)
			})
	})
	

 }

 

 module.exports = userMethods