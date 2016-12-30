var express = require('express');
var router = express.Router();

//【设置路由使用的模块】
// 客户信息列表用模块
var findAllCustomers = require('../routes/findAllCustomers');
// 客户新增用模块
var addCustomerView = require('../routes/addCustomerView');
var addCustomerHandler = require('../routes/addCustomerHandler');
// 客户修改用模块
var editCustomerView = require('../routes/editCustomerView');
var editCustomerHandler = require('../routes/editCustomerHandler');
// 客户删除用模块
var deleteCustomerHandler = require('../routes/deleteCustomerHandler');
// 客户查询用模块
var searchCustomerHandler = require('../routes/searchCustomerHandler');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//【设置路由】
// 路由：获取客户信息后，跳转至客户信息列表
router.get('/customer', findAllCustomers);
// 路由：跳转至客户新增页面
router.get('/customer/add', addCustomerView);
// 路由：执行客户新增后，跳转至客户信息列表
router.post('/customer/add', addCustomerHandler);
// 路由：跳转至客户修改页面
router.get('/customer/edit/:userid', editCustomerView);
// 路由：执行客户修改后，跳转至客户信息列表
router.post('/customer/edit/:userid', editCustomerHandler);
// 路由：执行客户删除后，跳转至客户信息列表
router.get('/customer/delete/:userid', deleteCustomerHandler);
// 路由：获取查询信息后，跳转至客户信息列表
router.post('/customer/search', searchCustomerHandler);

module.exports = router;