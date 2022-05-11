fetch("discografia.json")
.then(res => {
    console.log(res)
    return res.json()
})

let first = document.querySelector('#first')
let scrivi = document.querySelector('#scrivi')
let cancella = document.querySelector('#cancella')
let titolo = document.querySelector('#titolo')
let addLocal = document.querySelector('#write')
let resetLocal = document.querySelector('#delete')
let i = 0

window.onload = function(){
    if(localStorage.getItem('nome') != undefined){
        titolo.innerHTML = 'ciao' + localStorage.getItem('nome')
    }
    if(sessionStorage.getItem('tempo') != undefined){
        i = sessionStorage.getItem('tempo')
    }
    
}


scrivi.addEventListener('click',function(e){
    e.preventDefault()
 sessionStorage.setItem('nome',first.value)
 titolo.innerHTML = 'Ciao sono, ' + sessionStorage.getItem('nome')

})

cancella.addEventListener('click',function(e){
    e.preventDefault()
sessionStorage.clear()
titolo.innerHTML = 'No Data' 
    first.value = ''
})



addLocal.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.setItem('nome',first.value)
    titolo.innerHTML = 'Ciao sono,' + localStorage.getItem('nome')
 
 
})

resetLocal.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.clear()
    titolo.innerHTML = 'No Data' 
    first.value = ''
})


var timer = document.querySelector('#timer')
    setInterval(function(){

    i++
    sessionStorage.setItem('tempo',i)
    timer.innerHTML = sessionStorage.getItem('tempo')



},1000)

