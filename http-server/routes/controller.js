var self = {};
var db, response;

var factory = {
    getCart: function () {
        db.query('select 1 as cart;', function(error, rows, fields){
            response.end(JSON.stringify(rows));
        });
    },
    getCommodity: function () {
        db.query('select 1 as commodity;', function(error, rows, fields){
            response.end(JSON.stringify(rows));
        });
    },
    getList: function () {
        db.query('select 1 as list;', function(error, rows, fields){
            response.end(JSON.stringify(rows));
        });
    }
};

self.factory = factory;

self.map = {
    '/cart': self.factory.getCart,
    '/commodity': self.factory.getCommodity,
    '/list': self.factory.getList
};

self.route = function (url, appContext) {
    db = appContext.getDB();
    response = appContext.getResponse();

    self.map[url.path]();
};

module.exports = self;



