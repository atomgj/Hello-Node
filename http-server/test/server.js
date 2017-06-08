var http = require('http'),
    mysql = require('mysql'),
    url = require('url'),
    queryString = require('querystring'),
    appContext = require('./appContext'),
    controller = require('./controller'),
    db, server, path, condition, postData;


db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "hello-node"
});


server = http.createServer(function (request, response) {


    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });


    appContext.setDB(db);
    appContext.setRequest(request);
    appContext.setResponse(response);

    path = url.parse(request.url);

    if (request.method.toUpperCase() == 'POST') {
        postData = "";
        request.addListener('data', function (data) {
            postData += data;
        });

        request.addListener('end', function () {
            condition = queryString.parse(postData);
            appContext.setCondition(condition);
            controller.route(path, appContext);
        });
    } else {
        if ('/favicon.ico' != request.url) {
            path = url.parse(request.url);
            condition = queryString.parse(path.query);
            appContext.setCondition(condition);
            controller.route(path, appContext);
        } else {
            response.end();
        }
    }
});

server.listen(3000);