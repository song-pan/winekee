function checkEmail() {
  var myReg = /^\w+@\w+\.\w+(\.cn)?$/
  if (!myReg.test(email.value)) {
    email_msg.innerHTML = '邮箱格式不对！'
    email_msg.style.color = 'red'
    return
  } else {
    email_msg.innerHTML = '√'
    email_msg.style.color = 'green'
  }
}
function checkUname() {
  var myReg = /^\w{2,8}$/
  if (myReg.test(uname.value)) {
    uname_msg.innerHTML = '√'
    uname_msg.style.color = 'green'
  } else {
    uname_msg.innerHTML = '请输入2~8位用户名'
    uname_msg.style.color = 'red'
  }
}
function checkPwd() {
  // var myReg = /\d{6,16}/
  var str = upwd.value

  if (!str) {
    upwd.innerHTML = '请输入6~16位密码'
    upwd_msg.style.color = 'red'
  } else {
    upwd_msg.innerHTML = '√'
    upwd_msg.style.color = 'green'
  }
}
function c_checkPwd() {
  if (upwd.value === c_upwd.value) {
    c_upwd_msg.innerHTML = '√'
    c_upwd_msg.style.color = 'green'
  } else {
    c_upwd_msg.innerHTML = '两次输入密码不一致'
    c_upwd_msg.style.color = 'red'
  }
}
function register() {
  if (!email.value) {
    alert('邮箱不能为空')
    email.focus()
    return
  }

  if (!upwd.value) {
    alert('密码不能为空')
    upwd.focus()
    return
  }
  if (!uname.value) {
    alert('用户名不能为空')
    uname.focus()
    return
  }
  if (
    email_msg.innerHTML == '√' &&
    uname_msg.innerHTML == '√' &&
    upwd_msg.innerHTML == '√' &&
    c_upwd_msg.innerHTML == '√'
  ) {
    var xhr = new XMLHttpRequest() //创建异步对象xhr
    //开启监听  接收响应
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.responseText == 1) {
          alert('注册成功')
          location.href = '../login.html'
        } else {
          alert('注册失败')
        }
      }
    }
    xhr.open('post', '/user/register', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') //bug点  记住  不要=号
    var formdata = `uname=${uname.value}&upwd=${upwd.value}&email=${email.value}`
    xhr.send(formdata)
  } else {
    alert('输入有误')
  }
}
