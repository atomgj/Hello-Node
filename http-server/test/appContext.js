var self = {};


self.setRequest = function (request) {
    self.request = request;
    return self;
};

self.setResponse = function (response) {
    self.response = response;
    return self;
};

self.setDB = function (db) {
    self.db = db;
    return self;
};

self.getRequest = function () {
    return self.request;
};

self.getResponse = function () {

    return self.response;
};

self.getDB = function () {
    return self.db;
};

self.setCondition = function (condition) {
    self.condition = condition;
    return self;
};

self.getCondition = function () {
    return self.condition;
};

module.exports = self;