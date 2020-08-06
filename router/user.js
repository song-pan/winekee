const express = require('express') //引入express模块
const router = express.Router() //创建路由器对象
const pool = require('../pool.js') //引入连接池对象
//添加login路由
router.get('/login', (req, res) => {
  pool.query(
    'select * from user where uname=? and upwd=?',
    [req.query.uname, req.query.upwd],
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
//添加register路由
router.post('/register', (req, res) => {
  pool.query('insert into user set ?', [req.body], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send('1')
    } else {
      res.send('0')
    }
  })
})
//导出路由器对象router
module.exports = router
