const express = require('express') //引入express模块
const router = express.Router() //创建路由器对象
const pool = require('../pool.js') //引入连接池对象
//添加login路由
router.post('/login', (req, res) => {
  pool.query(
    'select * from user where uname=? and upwd=?',
    [req.body.uname, req.body.upwd],
    (err, result) => {
      if (err) throw err
      if (result.length === 0) {
        res.send('0')
      } else {
        res.send(result)
      }
    }
  )
})
//导出路由器对象router
module.exports = router
