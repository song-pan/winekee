const mysql = require('mysql') //引入mysql模板
const pool = mysql.createpool({
  host: '127.0.0.1',
  port: 3306,
  password: '',
  user: 'root',
  database: 'winekee',
  connectionLimit: 20,
})
module.exports = pool //导出pool连接池对象
