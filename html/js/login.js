function login() {
  if (!uname.value) {
    uname_msg.innerHtml = '用户名不能为空'
    uname.focus()
    return
  }
  if (!upwd.value) {
    upwd_msg.innerHtml = '密码不能为空'
    upwd.focus()
    return
  }
  //创建异步对象
  var xhr = new XMLHttpRequest()
  //开启监听  通过异步对象接收响应
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText)
      if (obj != 0) {
        sessionStorage.setItem('uid', obj[0].uid)
        location.href = 'index.html'
      } else {
        alert('用户名或者密码错误')
      }
    }
  }
  xhr.open('post', `/user/login?`)
}
