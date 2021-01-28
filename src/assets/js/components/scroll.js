import $ from 'jquery'

// Scrolls to div with an id
const speed = 100

$('a[href*="#"]')
  .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith('#'))
  .unbind('click.smoothScroll')
  .bind('click.smoothScroll', event => {
    const targetId = event.currentTarget.getAttribute('href').split('#')[1]
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      event.preventDefault()
      $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed)
    }
  })
  