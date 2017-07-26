console.clear()

let cvs = document.querySelector('canvas')
let ctx = cvs.getContext('2d')

let h = cvs.height
let w = cvs.height

draw(true)

function draw(initial) {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (initial || Math.random() > 0.95) {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`
        ctx.fillRect(x, y, 1, 1)
      }
    }
  }
  window.requestAnimationFrame(() => { draw(false) })
}
