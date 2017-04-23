#!/usr/local/bin/node

var express = require('express');
var app = express();
var path = require('path');
var bodyParser  = require('body-parser')


 
app.set('views', __dirname+'/views');
app.set('view engine', 'html')

app.engine( '.html', require( 'ejs' ).__express );

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
 
app.get('/', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res){
    console.log("username"+ req.body.username);
})

app.get('/home', function(req, res){
    res.render("home")
})

app.get('/login', function(req, res){
	res.render('login')
})
app.listen(9999);
