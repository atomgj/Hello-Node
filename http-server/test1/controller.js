var self = {},
    db, response, condition, sql, api
    ;

self.factory = {
    getCart : function(){
        sql = 'select * from t_user;';
        self.query(sql);
    },
    getCommodity : function(){
        sql = 'select * from t_user;';
        self.query(sql);
    },
    getList : function(){
        sql = 'select * from t_user;';
        self.query(sql);
    }
};

self.map = {
    '/cart' : self.factory.getCart,
    '/commodity' : self.factory.getCommodity,
    '/list' : self.factory.getList
};

self.query = function(sql){
   db.query(sql, function(err, rows, fields){
      response.end(JSON.stringify(rows));
   });
};

self.route = function(path, appContext){
    response = appContext.getResponse();
    db = appContext.getDB();
    condition = appContext.getCondition();

    api = self.map[path.pathname];
    if(api){
        api();
    }else{
        response.end("{error: '404'}");
    }

};

module.exports = self;