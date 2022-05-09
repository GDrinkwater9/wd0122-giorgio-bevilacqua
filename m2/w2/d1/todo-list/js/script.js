let testo = document.querySelector('#testo')
let bottone = document.querySelector('#bottone')
let lista = document.querySelector('#lista')

bottone.addEventListener('click',function(){

let div = document.createElement('div')//<div></div>
div.innerHTML = testo.value
div.classList.add('alert','alert-success')
lista.append(div)//scrivo l'elemento nell'html

testo.value = ''


})