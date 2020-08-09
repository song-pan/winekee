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
// function search() {
//   // var pnamearr = new URLSearchParams(parent.location.search)
//   // var pname = pnamearr.get('pname')
//   //创建异步对象

//   var xhr = new XMLHttpRequest()
//   //开启监听 接收响应
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var arr = JSON.parse(xhr.responseText)
//       if (arr != 0) {
//         var str = ''
//         for (var obj of arr) {
//           str += `
//           <li onmouseenter="show_cart(this)" onmouseleave="h_cart(this)">
//             <div class="wine-pic">
//               <img src=${obj.images} />
//               <div id="d2" class="pic-demo">
//                 <div class="pic-icon"></div>
//                 香槟产区品牌香槟，打造国内性价比第一香槟
//               </div>
//               <div id="d3" class="pic-demo pic-cart">
//                 <div class="pic-icon"></div>
//                 香槟产区品牌香槟，打造国内性价比第一香槟
//                 <div class="joincart">
//                   <a href=""></a>
//                 </div>
//               </div>
//             </div>
//             <div class="title">
//               <a href="">${obj.pname}</a><br />
//               <a href="">CANEPA FAMIGLIA RESERVE CABERNET SAUVIGNON</a>
//             </div>
//             <div class="price"><span>￥</span>${obj.price}</div>
//           </li>`
//         }

//         var hotList = window.parent.document.getElementById('shop_content')
//         hotList.innerHTML = str
//       } else {
//         alert('查询失败')
//       }
//     }
//   }
//   xhr.open('get', `/user/search?pname=${pname.value}`, true)
//   xhr.send()
// }
