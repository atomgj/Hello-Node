var self = {};


self.setDB = function(db){
    self.db = db;
    return self;
};


self.getDB = function(){
  return self.db;
};


self.setResponse = function(response){
    self.response = response;
    return self;
};

self.getResponse = function(){
    return self.response;
};

self.setCondition = function(condition){
    self.condition = condition;
    return self;
};


self.getCondition = function(){
    return self.condition;
};

module.exports = self;