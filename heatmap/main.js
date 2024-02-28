import './style.styl'

const $app = document.querySelector('.app')
const colors = ['#00008B', '#1E90FF', '#FFD700', '#FFA500']

const matrix = document.createElement('main')
matrix.classList.add('matrix')

Array(100).fill('').forEach(() => {
  const square = document.createElement('div')
  square.classList.add('square')

  document.onmousemove = ({ clientX: x, clientY: y }) => {
    const target = document.elementFromPoint(x, y)

    if (target.classList.contains('square')) {
      target.style.background = colors[~~(Math.random() * colors.length)]
      setTimeout(() => (target.style.background = ''), 10000)
    }
  }

  matrix.appendChild(square)
})

$app.appendChild(matrix)
