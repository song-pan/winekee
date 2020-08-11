function show_cart(x) {
  x.children[0].children[1].style.display = 'none'
  x.children[0].children[2].style.display = 'block'
}

function h_cart(x) {
  x.children[0].children[2].style.display = 'none'
  x.children[0].children[1].style.display = 'block'
}
function search() {
  var arr = new URLSearchParams(location.search)
  var pname = arr.get('pname')
  //创建异步对象

  var xhr = new XMLHttpRequest()
  //开启监听 接收响应
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var arr = JSON.parse(xhr.responseText)
      if (arr != 0) {
        var str = ''
        for (var obj of arr) {
          str += `
          <li onmouseenter="show_cart(this)" onmouseleave="h_cart(this)">
            <div class="wine-pic">
              <img src=${obj.images} />
              <div id="d2" class="pic-demo">
                <div class="pic-icon"></div>
                香槟产区品牌香槟，打造国内性价比第一香槟
              </div>
              <div id="d3" class="pic-demo pic-cart">
                <div class="pic-icon"></div>
                香槟产区品牌香槟，打造国内性价比第一香槟
                <div class="joincart">
                  <a href=""></a>
                </div>
              </div>
            </div>
            <div class="title">
              <a href="">${obj.pname}</a><br />
              <a href="">CANEPA FAMIGLIA RESERVE CABERNET SAUVIGNON</a>
            </div>
            <div class="price"><span>￥</span>${obj.price}</div>
          </li>`
        }

        var hotList = document.getElementById('shop_content')
        hotList.innerHTML = str
      } else {
        alert('查询失败')
      }
    }
  }
  xhr.open('get', `/user/search?pname=${pname}`, true)
  xhr.send()
}
