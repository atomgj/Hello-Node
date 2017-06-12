var db = require('./db'),
    sql, arr;

module.exports = {
    login: function (param, callback) {
        sql = "select count(*) as count from t_user where username=? and password=?;";
        arr = [param.username, param.password];
        db.query(sql, arr, function (err, result) {
            var obj = {};
            if (err) {
                obj.success = false;
                obj.message = err.message;
            } else {
                obj.success = true;
                obj.data = result;
            }
            callback(JSON.stringify(obj));
        });
    },
    register: function (param, callback) {

        db.query("select max(id) as id from t_user;", function (err, result) {
            var obj = {};
            if (err) {
                obj.success = false;
                obj.message = err.message;
                callback(JSON.stringify(obj));
            } else {
                sql = "insert into t_user (id, username, password, role) values (?,?,?,?) ";
                arr = [result[0].id + 1, param.username, param.password, (param.role || 0)];
                db.query(sql, arr, function (err, _result) {
                    var obj = {};
                    if (err) {
                        obj.success = false;
                        obj.message = err.message;
                    } else {
                        obj.success = true;
                        obj.data = _result;
                    }
                    callback(JSON.stringify(obj));
                });
            }
        });

    },
    commodity: function (param, callback) {
        var step = "";

        arr = [param.orderBy || 'updateTime', param.orderType || 'ASC', param.startIndex || 0, param.endIndex || 20];
        if(!param.userType){
            step += " and userId=? ";
            arr.unshift(param.userId);
        }
        sql = "select a.*, b.count from t_commodity a " +
            "left join " +
            "(select count(*) as count, commodityId from t_like group by commodityId) b " +
            "on" +
            " a.id = b.commodityId " +
            step +
            " ORDER BY ? ? LIMIT ?, ?";

        db.query(sql, arr, function (err, result) {
            var obj = {};
            if (err) {
                obj.success = false;
                obj.message = err.message;
            } else {
                obj.success = true;
                obj.data = result;
            }
            callback(JSON.stringify(obj));
        });
    },
    detail: function (param, callback) {
        sql = "select a.*, b.count from t_commodity a " +
            "left join " +
            "(select count(*) as count, commodityId from t_like group by commodityId) b " +
            "on" +
            " a.id = b.commodityId  where id=? ";

        arr = [param.id];
        db.query(sql, arr, function (err, result) {
            var obj = {};
            if (err) {
                obj.success = false;
                obj.message = err.message;
            } else {
                obj.success = true;
                obj.data = result;
            }
            callback(JSON.stringify(obj));
        });
    },
    like: function (param, callback) {
        sql = "select count(*) as count from t_like where userId=? and commodityId=?";
        arr = [param.userId, param.commodityId];
        db.query(sql, arr, function (err, result) {
            var obj = {};
            if (err) {
                obj.success = false;
                obj.message = err.message;
                callback(JSON.stringify(obj));
            } else {
                if(result[0].count){
                    sql = "delete from t_like where userId=? and commodityId=? ";
                    db.query(sql, arr, function (err, _result) {
                        var obj = {};
                        if (err) {
                            obj.success = false;
                            obj.message = err.message;
                        } else {
                            obj.success = true;
                            obj.data = _result;
                        }
                        callback(JSON.stringify(obj));
                    });
                }else{
                    sql = "insert into t_like (userId, commodityId) values (?, ?) ";
                    db.query(sql, arr, function (err, _result) {
                        var obj = {};
                        if (err) {
                            obj.success = false;
                            obj.message = err.message;
                        } else {
                            obj.success = true;
                            obj.data = _result;
                        }
                        callback(JSON.stringify(obj));
                    });
                }
            }

        });
    },
    edit: function (param, callback) {
        sql = "update t_commodity set name=?, price=?, category=?, updateTime=now() where id=?;";
        arr = [param.name, param.price, param.category, param.id];
        db.query(sql, arr, function (err, result) {
            var obj = {};
            if (err) {
                obj.success = false;
                obj.message = err.message;
            } else {
                obj.success = true;
                obj.data = result;
            }
            callback(JSON.stringify(obj));
        });
    }
};
