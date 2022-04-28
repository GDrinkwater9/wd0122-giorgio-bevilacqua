let cube = document.querySelector('.cube')
let avanti = document.querySelector('#destra')
let indietro = document.querySelector('#sinistra')

let position = 0
let flag=
avanti.addEventListener('click',next)

avanti.addEventListener('click')
function next(){
    position -= 90;
    cube.style.transform = `rotateY(${position}deg)`;
}
indietro.addEventListener('click')
function next(){
    position -= 90;
    cube.style.transform = `rotateY(${position}deg)`;
}