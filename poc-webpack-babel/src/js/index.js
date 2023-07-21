import './../css/style.scss'
import pic from '../assets/shot.png'

const numbers = [1,2,3,4,5,6,7,8,9]
const odds = numbers.filter(num => num % 2 == 1)
const titulo = document.createElement('h1')
titulo.innerHTML = "Olá, galera!"
titulo.classList.add('cor')
titulo.style.fontStyle = 'italic'
const picture = document.createElement('img')
picture.src = pic
document.querySelector('body').appendChild(titulo)
document.querySelector('body').appendChild(picture)