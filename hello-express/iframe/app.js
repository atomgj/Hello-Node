#!/usr/local/bin/node

var express = require('express');
var app = express();
var path = require('path');
 
app.set('views', __dirname+'/views');
 
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
 
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(9999);
