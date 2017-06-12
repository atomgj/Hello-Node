var route = {},
    service = require('./service'),
    url = require('url'),
    queryString = require('querystring')
    ;

/**
 * /login 登录
 * /register 注册
 * /commodity 列表
 * /detail 详情
 * /like 点赞
 * /edit 编辑
 */

route.map = {
    '/login' : service.login,
    '/register' : service.register,
    '/commodity' : service.commodity,
    '/detail' : service.detail,
    '/like' : service.like,
    '/edit' : service.edit
};

route.controller = function(req, res){
    var path = url.parse(req.url);
    var api = route.map[path.pathname];
    var str = "", param;

    if(api){
        if(req.method.toUpperCase() == 'POST'){
            req.on('data', function (data) {
                str += data;
            });
            req.on('end', function () {
                param = queryString.parse(str);
                api(param, res);
            });
        }else{
            param = queryString.parse(path.query);
            api(param, res);
        }
    }else{
        res.end("404");
    }
};

module.exports = route;