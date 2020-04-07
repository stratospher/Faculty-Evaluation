const methods = require('../lib/methods')
var express = require('express');
var router = express.Router();

var subjectGradesAssociation = {
q1:{"Excellent":17.75,"Good":14.125,"Fair":10.28125,"Poor":3.53125,"Blank":8.00},
q2:{"Excellent":14.50,"Good":11.8125,"Fair":8.1125,"Poor":2.0125,"Blank":4.0874},
q3:{"Excellent":7.50,"Good":5.7125,"Fair":4.0375,"Poor":1.125,"Blank":2.2125},
q4:{"Less than 10":5.85,"10 t0 25":3.6625,"More than 25":1.9125,"Blank":1.6375,"":0},
q5:{"No":4.00,"Yes":0.67375,"Blank":1.65,"":0,"":0},
q6:{"Excellent":9.25,"Satisfactory":6.34125,"Inadequate":2.50,"Blank":3.1625,"":0},
q7:{"Just Right":4.75,"Too Fast":1.34125,"Too slow":1.19125,"Blank":1.4,"":0},
q8:{"Yes":6.875,"Sometimes":3.89375,"No":0.7375,"Blank":1.775,"":0},
q9:{"Pleasant":6.75,"Indifferent":2.7825,"Unpleasant":1.27875,"Blank":1.9375,"":0},
q10:{"Sincere":11.5,"Not sincere":1.325,"Unable to judge":5.06375,"Blank":4.025,"":0},
q11:{"Excellent":11.25,"Good":9.025,"Fair":6.45625,"Poor":1.5625,"Blank":2.025},
}

router.get('/',(req,res,next)=>{
    methods.evtable.getsubjectandfaculty(sess.depId)
	.then(re=>{
		res.render("../views/report.ejs",{subfac:re});
		//console.log(re)
	})
	.catch(er =>{
		res.send(er)
	})
    //res.render("../views/report.ejs");
    
})
router.post('/find',(req,res,next)=>{
    console.log("inside /find")
    console.log(req.body)
    methods.evtable.getSubjectrow(sess.depId,req.body)
	.then(re=>{
        console.log("test here"+ re);
        re.forEach(element => {
            console.log(element.sub)
            
        });
		res.redirect("/report");
		console.log(re)
	})
	.catch(er =>{
		res.send(er)
	})
    //res.render("../views/report.ejs");
    
})


module.exports = router
