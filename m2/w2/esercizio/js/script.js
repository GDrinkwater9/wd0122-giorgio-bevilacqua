let nome = document.querySelector('#nome')
let cognome = document.querySelector('#cognome')
let data = document.querySelector('#data')

let first = document.querySelector('#first')
let second = document.querySelector('#second')
let last = document.querySelector('#last')

let bottone = document.querySelector('#bottone')


bottone.addEventListener('click',function(){

let div1 = document.createElement('div')
div1.innerHTML = nome.value 

let div2 = document.createElement('div')
div2.innerHTML = cognome.value

let div3 = document.createElement('div')
div3.innerHTML = data.value

div1.classList.add()
div2.classList.add()
div3.classList.add()

first.append(div1)
second.append(div2)
last.append(div3)

nome.value = ''
cognome.value = ''
data.value = ''



})
