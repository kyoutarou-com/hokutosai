'use strict'

class Image {
  constructor (url, width, height) {
    Object.defineProperty(this, 'url', { value: url })
    Object.defineProperty(this, 'width', { value: width })
    Object.defineProperty(this, 'height', { value: height })
  }
}

const map1Image = new Image('./images/map1.png', 1024, 1024)

function createMap (id, image) {
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
    map.unproject([0, image.height], 3),
    map.unproject([image.width, 0], 3)
  ])

  map.fitBounds(imageBounds)
  map.setMaxBounds(imageBounds.pad(0.5))

  L.imageOverlay(image.url, imageBounds).addTo(map)

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
  createMap('map1', map1Image)
  createMap('map2', map1Image)
  createMap('map3', map1Image)
  createMap('map4', map1Image)
})
