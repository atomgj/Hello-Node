var http = require('http'),
    mysql = require('mysql'),
    db,
    server
;

db = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "root",
    database : "hello-node"
});


server = http.createServer(function(request, response){


     response.writeHead(200, {
          "Content-Type" : "text/plain"
     });
     db.query("select 1 as cost;", function(error, rows, fields){
 	  response.end(JSON.stringify(rows));
     });

});



server.listen(3000);
