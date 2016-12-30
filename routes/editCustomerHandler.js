// 【客户修改】业务模块
var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbconfig');
var customersql = require('../db/customersql');

// 使用dbconfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

module.exports = function (req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function (err, connection) {
        var param = {
            username: req.body.username,
            email: req.body.email,
            mobile: req.body.mobile
        };

        // 建立连接 修改用户信息
        connection.query(customersql.update, [param, req.params.userid], function (err, result) {
            // 释放连接
            connection.release();

            res.redirect('/customer');
        });
    });
};