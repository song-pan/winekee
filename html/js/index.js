function show_cart(x) {
  x.children[0].children[1].style.display = 'none'
  x.children[0].children[2].style.display = 'block'
}

function h_cart(x) {
  x.children[0].children[2].style.display = 'none'
  x.children[0].children[1].style.display = 'block'
}
// $(function () {
//   $.ajax({
//     url: 'header.html',
//     type: 'get',
//     success: function (result) {
//       $(result).replaceAll('#header')
//       $(
//         `<link rel="stylesheet" type='text/css' href="../css/header.css"/>`
//       ).appendTo('head')
//       $(`<script type='text/javascript' src="js/header.js"></script>`).appendTo(
//         'head'
//       )
//     },
//   })
// })
