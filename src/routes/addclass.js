const methods = require('../lib/methods')
var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
	res.render("../views/addclass.ejs");
})

router.post('/create',(req,res,next) => {
	methods.addclass.addclass(req.body)
	.then(re => {
		res.redirect('/addclass')
	})
	.catch(er => {
		res.send(er)
	})
})





module.exports = router