function login_status() {
  var uid = sessionStorage.getItem('uid')
  var uname = sessionStorage.getItem('uname')
  // var obj = new URLSearchParams(location.search)
  // console.log(obj)
  // var uname = obj.get('uname')
  if (!uid) {
    reg.innerHTML = '注册'
    login.innerHTML = '登录'
  } else {
    reg.innerHTML = `你好，${uname}`
    login.innerText = '退出'
    login.onclick = function clear() {
      sessionStorage.clear()
    }
    login.href = 'index.html'
  }
}
