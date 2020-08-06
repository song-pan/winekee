const express = require('express') //引入express模块
const app = express() //创建web服务器
const user = require('./router/user.js') //引入路由器对象
const bodyParser = require('body-parser') //引入第三方中间件
app.listen(8080) //设置端口
app.use(express.static(__dirname + '/html')) //托管静态资源
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
) //使用body-parser中间件将post请求解析为对象
app.use('/user', user) //把路由器挂载到服务器  使所有的路由器添加前缀/user
