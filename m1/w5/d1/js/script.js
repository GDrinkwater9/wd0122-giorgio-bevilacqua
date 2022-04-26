let now = new Date();
console.log(now);
// data attuale
console.log(now.getTime());
// time stamp
console.log(now.getDay()); 
// 0 = domenica / numero giorno della settimana 


let future = new Date();
console.log(future)

let futureMinutes = future.getMinutes();
future.setMinutes( futureMinutes + 15 );

console.log(future);

if(now.getTime() < future.getTime()){
    
} 
    //intervalli

    //setInterval(fn,millisecons)
    
    setInterval(function(){
        let n = new Date();
        document.querySelector('#secondi').innerHTML = n.getMinutes() + ' : '
        + n.getSeconds()
    },1000)

