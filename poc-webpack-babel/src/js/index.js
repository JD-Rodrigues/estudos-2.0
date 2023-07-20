import './../css/style.scss'
const numbers = [1,2,3,4,5,6,7,8,9]
const odds = numbers.filter(num => num % 2 == 1)
const titulo = document.createElement('h1')
titulo.innerHTML = "Olá, galera!"
titulo.classList.add('cor')
titulo.style.fontStyle = 'italic'
document.querySelector('body').appendChild(titulo)