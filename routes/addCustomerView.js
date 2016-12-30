// 【客户新增】视图模块
module.exports = function (req, res, next) {
    res.render('customer_add', {page_title: '客户新增'});
};