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
  if()
}
