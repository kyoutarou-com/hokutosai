'use strict'

class Image {
  constructor (url, width, height) {
    Object.defineProperty(this, 'url', { value: url })
    Object.defineProperty(this, 'width', { value: width })
    Object.defineProperty(this, 'height', { value: height })
  }
}

const map1Images = [new Image('images/campus-map-1.png', 1024, 1024)]
const map2Images = [
  new Image('images/campus-map-2-1.png', 1024, 1024),
  new Image('images/campus-map-2-2.png', 1024, 1024),
  new Image('images/campus-map-2-3.png', 1024, 1024),
  new Image('images/campus-map-2-4.png', 1024, 1024)
]

function createMap (id, images) {
  var map = L.map(id, {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 5,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'bottomright',
      title: 'フルスクリーン表示',
      titleCancel: '通常表示に戻す'
    },
    zoomControl: false
  })

  var imageBounds = L.latLngBounds([
    map.unproject([0, images[0].height], 3),
    map.unproject([images[0].width, 0], 3)
  ])

  //var center = imageBounds.getCenter() // 画像範囲の中央を取得
  //map.setView(center, 3) // 地図の中央を画像範囲の中央に設定
  map.fitBounds(imageBounds)
  map.setMaxBounds(imageBounds.pad(0.5))

  switch (images.length) {
    case 1:
      L.imageOverlay(images[0].url, imageBounds).addTo(map)
      break
    case 4:
      L.control
        .layers({
          専門棟１階: L.imageOverlay(images[0].url, imageBounds).addTo(map),
          専門棟２階: L.imageOverlay(images[1].url, imageBounds),
          専門棟３階: L.imageOverlay(images[2].url, imageBounds),
          専門棟４階: L.imageOverlay(images[3].url, imageBounds)
        })
        .addTo(map)
    default:
      break
  }

  var header = '<h1 class="cstm-slidmenu-header">Slide Menu</h1>'
  var contents = '<ul class="cstm-slidmenu-content">'
  contents += '<li>模擬店</li>'
  contents += '<li>展示</li>'
  contents +=
    '<li><i class="fab fa-github"></i> <a href="https://github.com/unbam/Leaflet.SlideMenu" target="_blank">GitHub</a></li>'
  contents += '</ul>'

  // SlideMenu
  var options = {
    width: '40%',
    height: '95%'
  }
  L.control.slideMenu(header + contents, options).addTo(map)
  L.control.zoomslider({ position: 'bottomright' }).addTo(map)
  L.control.zoomLabel({ position: 'bottomright' }).addTo(map)
}

//任意のタブにURLからリンクするための設定
function GethashID (hashIDName) {
  if (hashIDName) {
    $('.tab li')
      .find('a')
      .each(function () {
        const idName = $(this).attr('href')
        if (idName === hashIDName) {
          const parentElm = $(this).parent()
          $('.tab li').removeClass('active')
          $(parentElm).addClass('active')
          $('.area').removeClass('is-active')
          $(hashIDName).addClass('is-active')
        }
      })
  }
}

//タブをクリックしたら
$('.tab a').on('click', function () {
  const idName = $(this).attr('href')
  GethashID(idName)
  return false //aタグを無効にする
})

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
  $('.tab li:first-of-type').addClass('active')
  $('.area:first-of-type').addClass('is-active')
  var hashName = location.hash
  GethashID(hashName)
  createMap('map1', map1Images)
  createMap('map2', map2Images)
  createMap('map3', map1Images)
  createMap('map4', map1Images)
  createMap('a', map2Images)
})
