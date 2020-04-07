
const methods = require('../lib/methods')
var express = require('express');
var router = express.Router();
// router.get('/',(req,res,next)=>{
// 	//const classes = methods.addclass.getClassByDeptId(req.body)
	
// 	res.render("../views/addstudent.ejs");
// 	//,{classes : classes}
// })

// /*router.post('/create',(req,res,next) => {
// 	methods.addstudent.addstudent(req.body)
// 	.then(re => {
// 		res.redirect('/addstudent')
// 	})
// 	.catch(er => {
// 		res.send(er)
// 	})
// })*/

router.get('/',(request,response,next)=>{
	//const classes = methods.addclass.getClassByDeptId(req.body)
	//console.log('addsub')
	// Call method to find the classes in that respective department
	
	methods.addclass.getClassByDepId(sess.depId)
	.then(re=>{
		response.render("../views/addstudent.ejs",{classes:re});
		console.log(re)
	})
	.catch(er =>{
		response.send(er)
	})
	
})
	


module.exports = router