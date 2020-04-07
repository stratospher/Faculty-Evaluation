 const Promise = require('bluebird');
 const models = require('../models');
 const Sequelize= require('sequelize');
 var {sequelize} = models;
 const QuestionMethods={};
 QuestionMethods.takeweight = function(info){
     //console.log(info.ans1)
     return new Promise((resolve,reject)=>{
         models.scores.findOne(
             {
            raw: true,	 
            where : {options : info.ans1 ,questionnumer : 1},
            attributes:['questionnumer','weightage'],
            })
         .then((res)=>{
             resolve(res);
             //console.log(res)
         }).catch((err)=>{
             //console.log(err)
             reject(err);
             
         })
     })
 }

//info = [{questId:ques]

 QuestionMethods.getAllQuestions = function(info){
     return new Promise((resolve,reject) => {
         models.scores.findAll({
             raw : true
         })
         .then(res => {
             resolve(res)
         })
         .catch(err => {
             reject(err)
         })
     })
 }

 module.exports = QuestionMethods