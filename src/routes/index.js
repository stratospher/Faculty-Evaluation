var express = require('express');
var router = express.Router();

const session = require('express-session');
// const app = express();
/* GET home page. */



router.get('/', function(req, res) {
  res.render('login.ejs', { title: 'LoginPage' });
});
router.get('/admin', function(req, res) {
  res.render('admin.ejs', { title: 'AdminPage' });
});
router.use('/question',require("./question"))
router.use('/addstudent',require("./addstudent"))
router.use('/users',require("./users"))
router.use('/studentlogin',require("./studentlogin"))
router.use('/addclass',require("./addclass"))
router.use('/login',require("./login"))
router.use('/addsubject',require("./addsubject"))
router.use('/report',require("./report"))
router.get('/hod',function(req, res){
	//console.log(req.session.userId)
	res.render('hodadd.ejs',{title: 'Hod'});
})


// router.get('/student',function(req, res){
// 	res.send("Hellllo")
// })

module.exports = router;
