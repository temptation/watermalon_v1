// 【客户管理模块用SQL语句】对象
var customerSQL = {
    // 列表展现用
    queryAll: 'SELECT * FROM customers',

    // 客户新增用
    insert: 'INSERT INTO customers VALUES(NULL, ?, ?, ?)',

    // 客户修改用
    getCustomerById: 'SELECT * FROM customers WHERE userid = ?',
    update: 'UPDATE customers SET ? WHERE userid = ?',

    // 客户删除用
    delete: 'DELETE FROM customers WHERE userid = ?',

    // 条件查询用
    queryByUsername: 'SELECT * FROM customers WHERE username LIKE ?',
    queryByEmail: 'SELECT * FROM customers WHERE email LIKE ?',
    queryByMobile: 'SELECT * FROM customers WHERE mobile LIKE ?'
};

// 【客户管理模块用SQL语句】对象模块
module.exports = customerSQL;