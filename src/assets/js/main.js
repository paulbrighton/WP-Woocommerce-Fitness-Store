import $ from 'jquery'
import './components/navigation/hamburger-nav'
import './components/navigation/navigation'
import 'slick-carousel'
import './components/aos'
import './components/accordion'
import './components/slider'
import './components/search-form'
import './components/scroll'
import 'jquery-confirm'
// import webpackStream from 'webpack-stream'

$(document).ready(() => {
  $('.c-post__gallery').slick({
    arrows: false,
    adaptiveHeight: true
  })

  $('.most_recent_widget').slick()
  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind(
      'partial-content-rendered',
      (placement) => {
        if (
          placement.partial.widgetIdParts &&
          placement.partial.widgetIdParts.idBase ===
            '_themename_most_recent_widget'
        ) {
          placement.container.find('.most_recent_widget').slick()
        }
      }
    )
  }
})

$(function ($) {
  var siteNavigation = $('.navigation-main')

  siteNavigation.find('a').on('focus blur', function () {
    $(this).parents('li').toggleClass('focus')
  })
})

$(document).ready(function ($) {
  if ($('body').hasClass('home')) {
    if ($(window).width() < 768) {
      $.confirm({
        title: 'WooCommerce Demo Store!',
        content:
        'This is a WordPress custom theme using the Woocommerce plugin for the store features. Contact Paul at <a href="https://www.paulbrighton.com/">YP Digital</a> if you like what you see and for a quote on your next website.',
        useBootstrap: false,
        boxWidth: '75%',
        autoClose: 'close|128000'
      })
    } else {
      $.confirm({
        title: 'WooCommerce Demo Store!',
        content:
        'This is a WordPress custom theme using the Woocommerce plugin for the store features. Contact Paul at <a href="https://www.paulbrighton.com/">YP Digital</a> if you like what you see and for a quote on your next website.',
        useBootstrap: false,
        boxWidth: '50%',
        autoClose: 'close|128000'
      })
    }
  }
})

// $.confirm({
//   boxWidth: '75%',
//   useBootstrap: false
// })

// $.confirm({
//   boxWidth: '300px',
//   useBootstrap: false
// })
