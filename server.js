var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'miyoungrae123',
	database : 'node-login'
});
connection.connect();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/home',function(req,res){
	console.log('I recieved a get request');
	res.send("Welcome User ");
});

app.post('/login',function(req,res){
	console.log(req.body.username);
	console.log(req.body.password);
	var Username = req.body.username;
	var Password = req.body.password;
	connection.query('SELECT * FROM users where username = ' + connection.escape(Username) +' AND password = ' + connection.escape(Password),function(err,rows,fields){
		if(!err){
			if(Username == rows[0]['username'] && Password == rows[0]['password']){
				console.log('Logged in ');
				res.redirect('/home');
			}
			else{
				console.log('Invalid combination');
			}
		}
		else{
			console.log('Oops something went wrong');
		}
		connection.end();
	});

});

app.listen(3000,function(){
	console.log('Server running at port 3000');
});