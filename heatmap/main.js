import './style.styl'

const $app = document.querySelector('.app')
const colors = ['#00008B', '#1E90FF', '#FFD700', '#FFA500']

const matrix = document.createElement('main')
matrix.classList.add('matrix')

Array(100).fill('').forEach((_, i) => {
  const $square = document.createElement('div')
  $square.classList.add('square')
  $square.dataset.id = i

  matrix.appendChild($square)
})

$app.appendChild(matrix)

document.onmousemove = ({ clientX, clientY }) => {
  const x = ~~((clientX / window.innerWidth) * 10) + 1
  const y = ~~((clientY / window.innerHeight) * 10) + 1
  console.log(`x: ${x}, y: ${y}`)

  const $squares = document.querySelectorAll('.square')
  const id = (x + (y - 1) * 10 - 1).toString()
  const $target = [...$squares].find(s => s.dataset.id === id)
  if ($target) {
    const currentColorIndex = parseInt($target.dataset.colorIndex || '0', 10)
    const nextColorIndex = (currentColorIndex + 1) % colors.length
    $target.dataset.colorIndex = nextColorIndex
    $target.style.background = colors[nextColorIndex]
    setTimeout(() => ($target.style.background = ''), 5000)
  }
}
