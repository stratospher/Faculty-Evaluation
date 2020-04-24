var express = require('express');   //to load express module,this returns a fxn and we call it express
var router = express.Router();

const session = require('express-session');
/*
  const app = express(); 
    * call the express function and it returns an object of type Express and 
    * by convention we call it app
    * app object has a bunch of useful methods like app.get(),app.post(),app.put() and app.delete() and all these correspond to HTTP methods
      * to handle HTTP post request to an end point; u use app.post()
      * io implement a couple of end points that respond to HTTP get request we use app.get()
        * / to represent route of website
        * callback function that will be called when we have an HTTP get request to endpoint /
          * the callback function should have 2 arguments req and res 
          * req object has bunch of useful properties that gives us info about incoming request
        * app.get('/',(req,res)=>{
              res.send('Hello World');
          }
          );
        *this is how u define a route
        *the callback function is called route handler
        *app.listen(3000,()=>console.log('Listening on port 3000....'));
          *pass a fxn that will be called when app starts listening on port 3000
*/
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
