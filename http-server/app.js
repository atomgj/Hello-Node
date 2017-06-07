var http = require('http'),
    mysql = require('mysql'),
    url = require('url'),
    appContext = require('./routes/appContext'),
    controller = require('./routes/controller'),
    db, server, path;

db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "hello-node"
});

server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': "text/plain",
        'Access-Control-Allow-Origin' : '*'
    });

    appContext.setDB(db);
    appContext.setRequest(request);
    appContext.setResponse(response);

    if ('/favicon.ico' != request.url) {
        path = url.parse(request.url);
        controller.route(path, appContext);
    }
});

server.listen(3000);

