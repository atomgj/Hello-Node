var http = require('http'),
    url = require('url'),
    route = require('./route');

http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf8',
        'Access-Control-Allow-Origin': '*'
    });

    route.controller(req, res);

}).listen(3000);