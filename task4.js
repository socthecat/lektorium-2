let counter = 0

function dioFunction () {
  ++counter
  document.getElementById('counter').innerHTML = counter

  const kono = new Audio('assets/kono.ogg')
  kono.play()
  if (counter > 15) {
    location.reload()
  }
}

const dio = document.getElementById('dio')
const rect = dio.getBoundingClientRect()
const X = rect.left + rect.width / 2
const Y = rect.top + rect.height / 2

addEventListener('mousemove', function (event) {
  // https://en.wikipedia.org/wiki/Atan2
  dio.style.transform = 'rotate(' + Math.atan2(Y - event.clientY, X - event.clientX) + 'rad)'
})
