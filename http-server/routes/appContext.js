var self = {};

self.setRequest = function (request) {
    self.request = request;
    return self;
};

self.setResponse = function (response) {
    self.response = response;
    return self;
};

self.setDB = function(db){
    self.db = db;
    return self;
};

self.getRequest = function () {
    return self.request;
};

self.getResponse = function () {
    return self.response;
};

self.getDB = function(){
    return self.db;
};

/**
* 缓存request、response、dbconnection信息
**/
module.exports = self;
