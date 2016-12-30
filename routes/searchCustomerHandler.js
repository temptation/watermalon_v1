// 【条件查询】业务模块
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
        // 获取post过来的查询条件内容
        var condition;
        var paramKey = req.body.conditionKey;

        switch (paramKey) {
            case 'username':
                condition = customersql.queryByUsername;
                break;
            case 'email':
                condition = customersql.queryByEmail;
                break;
            case 'mobile':
                condition = customersql.queryByMobile;
                break;
        }

        // 建立连接 按条件查询用户信息
        connection.query(condition, ['%' + req.body.conditionValue + '%'], function (err, result) {
            // 释放连接
            connection.release();

            res.render('customer_list', {page_title: "客户信息", data: result});
        });
    });
};