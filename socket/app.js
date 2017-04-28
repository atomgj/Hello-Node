#!/usr/local/bin/node

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.status(200).send('welcome come here');
});


app.get('/index', function(req, res){
	res.sendFile('index.html', {root: __dirname});
});

var server = require('http').createServer(app);

var io = require('socket.io')(server);

io.on('connection', function(socket){

	socket.send('welcome from server');
	socket.on('message', function(data){
		console.log('message from client');
		console.log(data);
	})

});

server.listen(3000);
