var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('logininfo',['logininfo']);

app.use(express.static(__dirname + '/public'));

app.get('/login',function(req,res){
	console.log('I recieved a get request');
	db.logininfo.find(function(err,docs){
		console.log(docs);

	});
});

app.post('/login',function(req,res){
	console.log(req.body);
});

app.listen(3000);
console.log('Server running on port 3000');