#!/usr/local/bin/node

var express = require('express'),
	path = require('path'),
	session = require('express-session'),
	mongoose = require('mongoose'),
	multer = require('multer'),
	bodyParser = require('body-parser'),
	ejs = require('ejs');

global.dbHelper = require('./common/dbHelper');

var db = mongoose.connect('mongodb://127.0.0.1:27017/shop');
var app = express();

app.use(session({
	secret:'secret',
	resave:true,
	saveUninitialized: true,	
	cookie:{
		maxAge: 1000*30*60
	}
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.engine('.html', ejs.__express);

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./routes/index')(app);

app.get('/', function(req, res){
	res.render('login');
});

app.listen(3000);



