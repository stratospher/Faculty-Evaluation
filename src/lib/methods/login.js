const Promise = require('bluebird');
const models = require('../models');
const Sequelize= require('sequelize');
var {sequelize} = models;
 
 // console.log(models)

 const classMethods={};
 classMethods.login = function(info){
 	console.log(info)
 	return new Promise(function(resolve,reject) {
 		var a=[info.userId,info.password]
 		console.log("HERE")
 	models.users
      .findOne({
        where: {
           userId:info.userId
        }
      })      
 		.then(response=>{
 			console.log("RESPONSE")
			console.log(response.dataValues.usertype)
 			if(response.passwd == info.password){
 				resolve(response)			

 			}
 			else{
 				reject("Password")
 				console.log("Password wrong")
 			}
 		})
 		.catch(err=>{
 			console.log("HERE", err);
 			reject(err);
 		})
 	})
 }


 module.exports = classMethods