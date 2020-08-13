function login_status() {
  var uid = sessionStorage.getItem('uid')
  var uname = sessionStorage.getItem('uname')
  if (!uid) {
    reg.innerHTML = '注册'
    reg.href = 'register.html'
    login.innerHTML = '登录'
  } else {
    reg.innerHTML = `你好，${uname}`
    reg.href = 'javascript:;'
    login.innerText = '退出'
    login.onclick = function clear() {
      sessionStorage.clear()
    }
    login.href = 'index.html'
  }
}

function show_cart(x) {
  x.children[0].children[1].style.display = 'none'
  x.children[0].children[2].style.display = 'block'
}

function h_cart(x) {
  x.children[0].children[2].style.display = 'none'
  x.children[0].children[1].style.display = 'block'
}
function searchCar() {
  var xhr = new XMLHttpRequest()
  var uid = sessionStorage.getItem('uid')
  var pnum = document.getElementsByClassName('pnum')
  var car_pros = document.getElementsByClassName('car_pro')
  var textInfos = document.getElementsByClassName('textInfo')
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var arr = JSON.parse(xhr.responseText)
      if (arr != 0) {
        // textInfos[0].style.display = 'block'
        var str = ''
        for (var obj of arr) {
          str += `
          <li class="row no-gutters">
            <div class="car_pic col-3">
              <img src=${obj.images} />
            </div>
            <div class="col-8">
              <a class="biaoti" href="javascript:;">${obj.pname}</a>
              <br />
              <span class="shop_txt1">￥148.00</span class='text-secondary' >X<em >1</em>
              <span class="total-price shop_txt1">￥${obj.price}</span>
            </div>
            <div class="close_btn col-1">
              <a href=""></a>
            </div>
          </li>
          <li class="d-flex border-0">
            <div>
              <p>
                共<span class="shop_txt1 font-weight-bold">1</span
                >件商品
              </p>
              <p>
                共计：<span class="shop_txt1 font-weight-bold"
                  >${obj.price}</span>
              </p>
            </div>
            <div class="check_btn"><a href="">去结算</a></div>
          </li>`
        }
        car_pros[0].innerHTML = str
        car_pros[1].innerHTML = str
      }
    }
  }
  xhr.open('get', `/user/searchCar?uid=${uid}`, true)
  xhr.send()
}
function join(x) {
  var xhr = new XMLHttpRequest()
  var uid = sessionStorage.getItem('uid')
  var pname = x.parentElement.parentElement.parentElement.parentElement.querySelector(
    '.pname'
  )
  var price = x.parentElement.parentElement.parentElement.parentElement.querySelector(
    '.price'
  )
  var images = x.parentElement.parentElement.parentElement.parentElement.querySelector(
    '.images'
  )
  var car_pros = document.getElementsByClassName('car_pro')
  var textInfos = document.getElementsByClassName('textInfo')

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var r = xhr.responseText
      if (r == 1) {
        textInfos[0].style.display = 'none'
        var str = `<li class="row no-gutters">
        <div class="car_pic col-3">
          <img src=${images.src} />
        </div>
        <div class="col-8">
          <a class="biaoti" href="javascript:;">${pname.innerHTML}</a>
          <br />
          <span class="shop_txt1">￥148.00</span class='text-secondary' >X<em >1</em>
          <span class="total-price shop_txt1">￥${price.innerText}</span>
        </div>
        <div class="close_btn col-1">
          <a href=""></a>
        </div>
      </li>
      <li class="d-flex border-0">
        <div>
          <p>
            共<span class="shop_txt1 font-weight-bold">1</span
            >件商品
          </p>
          <p>
            共计：<span class="shop_txt1 font-weight-bold"
              >${price.innerText}</span>
          </p>
        </div>
        <div class="check_btn"><a href="">去结算</a></div>
      </li>`
        str += car_pros[0].innerHTML
        car_pros[0].innerHTML = str
        car_pros[1].innerHTML = str
        alert('加入成功')
      } else {
        alert('加入购物车失败')
      }
    }
  }
  xhr.open('post', '/user/updateCar', true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  var formData = `pname=${pname.innerHTML}&price=${price.innerHTML}&images=${images.src}&uid=${uid}&pnum=1`
  xhr.send(formData)
}
