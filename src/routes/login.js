const methods = require('../lib/methods')
var express = require('express');
var router = express.Router();

const session = require('express-session');
const app = express();
app.use(session({secret: 'ssshhhhh'}));

//router.get('/',(req,res,next)=>{
//res.render("../views/login.ejs");
//})

router.post('/',(req,res,next) => {
	console.log("ETSTSTTS",req.body);
	methods.login.login(req.body)
	.then(re => {
		console.log("Inside then of login")
		console.log(re.dataValues);	
		sess=req.session;
		sess.usertype = re.dataValues.usertype
		sess.userId = re.dataValues.userId
		sess.depId = re.dataValues.depId
		sess.classname=re.dataValues.classname
		// req.session.token = re.userid;
		// console.log(req.body.userId + 'userId');
		// req.session.userid = req.body.userId;
		if(sess.usertype == "admin"){
			res.redirect("/users")
		} else if(sess.usertype == "hod"){
			res.redirect("/hod")
		} 
		else if(sess.usertype=="student"){
			res.redirect("/studentlogin")
		}
		// res.redirect('/users')
	})
	.catch(er => {
		res.redirect('/')
	})
})



module.exports = router