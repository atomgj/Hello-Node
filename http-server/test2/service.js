var dao = require('./dao');

module.exports = {
    login: function (param,  res) {
        dao.login(param, function (result) {
            res.end(result);
        });
    },
    register: function (param, res) {
        dao.register(param, function (result) {
            res.end(result);
        });
    },
    commodity: function (param, res) {
        dao.commodity(param, function (result) {
            res.end(result);
        });
    },
    detail: function (param, res) {
        dao.detail(param, function (result) {
            res.end(result);
        });
    },
    like: function (param, res) {
        dao.like(param, function (result) {
            res.end(result);
        });
    },
    edit: function (param, res) {
        dao.edit(param, function (result) {
            res.end(result);
        });
    }
};