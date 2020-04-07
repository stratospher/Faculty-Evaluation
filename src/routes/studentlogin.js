const methods = require('../lib/methods')
var express = require('express');
var router = express.Router();
const session = require('express-session');
// router.get('/',(req,res,next)=>{
// 	res.render("../views/studentlogin.ejs");
// })

router.get('/',(request,response,next)=>{
	//const classes = methods.addclass.getClassByDeptId(req.body)
	//console.log('addsub')
	// Call method to find the classes in that respective department
	
	methods.addsubject.getsubjectbyclass(sess.classname)
	.then(re=>{
		response.render("../views/studentlogin.ejs",{subject:re});
		console.log(re)
	})
	.catch(er =>{
		response.send(er)
	})
	
})

		// req.session.token = re.userid;
		// console.log(req.body.userId + 'userId');
		// req.session.userid = req.body.userId;
		
	


module.exports = router