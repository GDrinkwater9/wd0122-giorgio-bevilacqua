let next = document.querySelector('#next')
.addEventListener('click',function(){
    history.forward()
})

let prev = document.querySelector('#prev')
.addEventListener('click',function(){
    history.back()

})

let card1 = document.querySelector('#card1')
prev.addEventListener('click',function(){
history.pushState({}, '' , 'index.html#card1')
})

function scriviCookie(){
    var now = new Date();

    now.setMonth

}