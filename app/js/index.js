const API = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

fetch(API)
  .then((res) => res.json())
  .then((data) => (document.querySelector('.quote').innerText = data[0]))

// ====
const el = document.querySelector('h2')
const basilChefs = ['mama', 'papa', 'baby']
const basilTexture = ['greasy', 'frozen', 'spicy']

function random(array) {
  const max = array.length
  const randomIndex = Math.floor(Math.random() * max)
  return array[randomIndex]
}

var recipeName = `My ${random(basilChefs)}'s ${random(basilTexture)} Pesto`

el.innerText = recipeName
