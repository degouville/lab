import './style.styl'


const $button = document.querySelector('button')
const $ul = document.querySelector('ul')


$button.onclick = () => $ul.classList.toggle('is-open')