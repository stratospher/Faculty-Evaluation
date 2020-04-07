 const methods = require('../lib/methods')
 var express = require('express');
 var router = express.Router();
console.log("heyyy")
router.post('/',(req,res,next)=>{
	//Call method to retrieve subjname,facultname
	//methods.addsubject.getFaculty()
	//console.log(req.body)
	subject = req.body.subname;
	methods.addsubject.getFaculty(subject)
	.then(re => {
		console.log(re)
		res.render("../views/question.ejs",{subject:subject,faculty:re});
	})
	
 })
 router.post('/do',(req,res,next) => {
	 console.log("inside /do")
	 console.log(req.body)
	 //console.log(faculty)
	 //var a=methods.question.takeweight(req.body)
	 //console.log(a)

	//  methods.question.takeweight(req.body)
	//  .then(re => {
	// 	 quest_weightage = re.weightage
	// 	 obj = {}
	// 	 obj.q1 = quest_weightage;
	// 	 methods.evtable.evtable(req.body,obj)
	// 	.then(re => {

	// 		//console.log(re)
	// 		res.redirect('/studentlogin')
	// 	})
	// 	.catch(er => {
	// 		res.send(er)
	// 	})
	//  })

	methods.question.getAllQuestions()
	.then(res=>{
		console.log(res)
		obj = {}
		res.forEach(element => {
			if(obj["ans"+element.questionnumer]){
				var key = "ans"+element.questionnumer
				val = obj[key]
				val[element.options] = element.weightage
			}
			else{
				var key = "ans"+element.questionnumer
				obj[key] = new Object();
				// console.log()
				obj[key][element.options] = element.weightage
			}
		});
		// console.log(obj['1']['Excellent'])
		//console.log(req.body.ans1)
		// console.log(obj['1'].)
		console.log("here")
		// console.log(obj)
	
		//console.log(obj)
		var i;
		obj1={}
		var i = 0
		// console.log("ans"+i)
		for(i=1;i<12;i++)
		{
		
		  var key = "ans" + i;
		  console.log(key)
		  var o = req.body
		  var ele = o[key]
		  console.log(obj[key])
          obj1[i]= obj[key][ele];
		}
		console.log(obj1)
	})
	methods.evtable.evtable(req.body,obj1)
	 	.then(re => {

			console.log(re)
			res.redirect('/studentlogin')
	 	})
	.catch(err => {
		console.log(err)
	})

	
 })

 // obj = {1:{"Excellent":"12.3","Good":"3"},2:{},3:{}}
 
// obj[1]["excellent"]

module.exports = router
