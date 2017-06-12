var http = require('http'),
    mysql = require('mysql'),
    url = require('url'),
    qystring = require('querystring'),
    appContext = require('./appContext'),
    controller = require('./controller'),
    server, db, postData, condition, path;


db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'hello-node'
});


server = http.createServer(function(request, response){

    response.writeHead(200, {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'text/plain'
    });

    appContext.setDB(db);
    appContext.setResponse(response);

    path = url.parse(request.url);

    if(request.method.toUpperCase() == 'POST'){
        postData = "";
        request.on('data', function(data){
           postData += data;
        });

        request.on('end', function(){
            condition = qystring.parse(path.query);
            appContext.setCondition(condition);
            controller.route(path, appContext);
        })

    }else if('/favicon.ico' == request.url){
        response.end();
    }else{
        condition = qystring.parse(path.query);
        appContext.setCondition(condition);
        controller.route(path, appContext);
    }

});

server.listen(3000);