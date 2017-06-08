var self = {},
    db, response, condition;

self.factory = {
    getCart: function () {
        var sql = 'select id, username, password from t_user where username="' + condition.username + '" and password="' + condition.password + '";';
        self.query(sql);
    },
    getCommodity: function () {
        var sql = 'select id, username, password from t_user where username="' + condition.username + '" and password="' + condition.password + '";';
        self.query(sql);
    },
    getList: function () {
        var sql = 'delete from t_user where username="' + condition.username + '" and password="' + condition.password + '";';
        self.query(sql);
    }
};

self.map = {
    '/list': self.factory.getList,
    '/commodity': self.factory.getCommodity,
    '/cart': self.factory.getCart
};

self.query = function (sql) {
    db.query(sql, function (error, rows, fields) {
        response.end(JSON.stringify(rows));
    });
};

self.route = function (url, appContext) {
    db = appContext.getDB();
    response = appContext.getResponse();
    condition = appContext.getCondition();
    console.log(condition);
    self.map[url.pathname]();
};


module.exports = self;

