function login() {
  if (!uname.value) {
    uname_msg.innerHTML = '用户名不能为空'
    uname.focus()
    return
  }
  if (!upwd.value) {
    upwd_msg.innerHTML = '密码不能为空'
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
        sessionStorage.setItem('uname', obj[0].uname)
        location.href = `index.html?uname=${uname.value}`
      } else {
        alert('用户名或者密码错误')
      }
    }
  }
  //通过异步对象 创建请求  请求方法  请求的url
  xhr.open('get', `/user/login?uname=${uname.value}&upwd=${upwd.value}`, true)
  //通过异步对象  发送请求
  xhr.send()
}
