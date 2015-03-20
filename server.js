var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('logininfo',['logininfo']); //mongodb and collection name - logininfo
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.get('/home',function(req,res){
	console.log('I recieved a get request');
});

app.post('/login',function(req,res){
	console.log(req.body.username);
	console.log(req.body.password);
	var Username = req.body.username;
	var Password = req.body.password;
	db.logininfo.find({ username : Username },{ password : Password},function(err,logininfo){
		if(err || !logininfo)
			res.send("Invalid combination");
		else{
			console.log('Logged');
			res.redirect(302,'/home');
		}
	});
});

app.listen(3000);
console.log('Server running on port 3000');