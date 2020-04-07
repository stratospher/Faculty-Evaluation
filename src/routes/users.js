
const methods = require('../lib/methods')
var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
	res.render("../views/addusers.ejs");
})

router.post('/create',(req,res,next) => {
	methods.users.addUser(req.body)
	.then(re => {
		res.redirect('/users')
		// res.render()
	})
	.catch(er => {
		res.send(er)
	})
})


router.post('/bulkCreate',(req,res,next)=>{
	console.log(req.body)
	var arr = []
	for(var i = req.body.start; i < req.body.end; i++){
		obj = {}
		obj.depId = sess.depId
		obj.userId = "CET"+sess.depId+i;
		obj.passwd = "kalapila" + i;
		obj.usertype = "student";
		obj.classname = req.body.classname
		console.log(obj)
		arr.push(obj)
	}
	methods.users.bulkAdd(arr)
	.then(res2 => {
		res.redirect('/addstudent');
	})
	.catch(err => {
		console.log(err)
		//alert("")
	})
})

module.exports = router