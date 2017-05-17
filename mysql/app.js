var http = require('http'),
    mysql = require('mysql'), 
    url = require('url'),
    server, db, parseURL, controller, route;
    
db = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'hello-node'
});


server = http.createServer(function(request, response){
    controller(request, response);
});


controller = function(request, response){
    var obj = parseURL(request.url);
    if(obj){
        route(obj, response);
    }
};

route = function(obj, response){
    if('/commodity' == obj.pathname){
       db.query('select 1 as commodity;', function(error, rows, fields){
            response.writeHead(200, {
                "Content-Type" : "text/plain",
                "Access-Control-Allow-Origin": "*"
       });

            response.end(JSON.stringify(rows));
        });
    }else if('/cart' == obj.pathname){
        db.query('select 2 as cart;', function(error, rows, fields){
            response.writeHead(200, {
                'Content-Type' : 'text/plain',
                'Access-Control-Allow-Origin' : '*'
            });

            response.end(JSON.stringify(rows));
        });
    }else{
        db.query('select 3 as list;', function(error, rows, fields){
            response.writeHead(200, {
                'Content-Type' : 'text/plain'
            });

            response.end(JSON.stringify(rows));
        });
    }
};

parseURL = function(str){
    var obj;
    if('/favicon.ico' !== str){
        console.log(str);
	obj = url.parse(str);
    }
    console.log(obj);
    return obj;
};


server.listen(3000);

