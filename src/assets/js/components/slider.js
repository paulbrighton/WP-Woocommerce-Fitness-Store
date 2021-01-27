import $ from 'jquery'
import 'slick-carousel'

$('.slider-dots').slick({
  lazyLoad: 'progressive',
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 3000
})

$('.c-slider--arrows-inside').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
  nextArrow: '<a class="slick-next-inside" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></a>',
  prevArrow: '<a class="slick-prev-inside" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></a>'
})

$('.c-slider--arrows-outside').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
  nextArrow: '<a class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></a>',
  prevArrow: '<a class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></a>'
})

$('.c-slider--overflow').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    // {
    //   breakpoint: 768,
    //   settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 1
    //   }
    // },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
})
