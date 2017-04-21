#!/usr/local/bin/node

var express = require('express'),
    user = require('./user');

var 	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	path = require('path'),
	session = require('express-session');


var app = express();


app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


app.use(session({
	secret: 'asd',
	cookie: {maxAge: 30*1000*60},
	resave: true,
	saveUninitialized: false
}));

app.get('/', function(req,res){
	if(req.session.sign){
		console.log(req.session);
		res.render('sign', {session:req.session});	
	}else{
		res.render('index', {title:'index'})
	}
})


app.post('/sign', function(req,res){
	console.log('############')
	console.log(req.body)
	if(!req.body.password || !req.body.user || !user[req.body.user] || req.body.password!=user[req.body.user].password || !user[req.body.user]){
		res.end('sign failure');
	}else{
		req.session.sign = true;
		req.session.name = user[req.body.user].name;
		res.send('req.session.name: ' + req.session.name);
	}
})


app.get('/out', function(req,res){
	req.session.destroy();
	res.redirect('/');
})
app.listen(9999)
