const methods = require('../lib/methods')
var express = require('express')

var router = express.Router();


router.post('/',(req,res,next)=>{
	res.render('subjectList.ejs',{subject:"data structures"})
})


module.exports = router