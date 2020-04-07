const user = require('./users')
const quest = require('./question')
// console.log(user)

user.addUser()
.then(res => {
	console.log(res)
})
.catch(err => {
	console.log(err)
})

quest.getAllQuestions()
.then(res => {
	console.log(res)
})
.catch(err => {
	console.log(err)
})