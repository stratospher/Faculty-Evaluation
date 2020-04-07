
const methods = require('../lib/methods')
var express = require('express');
var router = express.Router();
router.get('/',(request,response,next)=>{
	//const classes = methods.addclass.getClassByDeptId(req.body)
	//console.log('addsub')
	// Call method to find the classes in that respective department
	
	methods.addclass.getClassByDepId(sess.depId)
	.then(re=>{
		response.render("../views/addsubject1.ejs",{classes:re});
		console.log(re)
	})
	.catch(er =>{
		response.send(er)
	})
	
})

router.post('/create',(req,res,next) => {
	methods.addsubject.addsubject(req.body)
	
	.then(re => {
		
		res.redirect('/addsubject')
	})
	.catch(er => {
		res.send(er)
	})
})



module.exports = router