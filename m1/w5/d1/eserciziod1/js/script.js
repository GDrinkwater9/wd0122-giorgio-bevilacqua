let data = new Date();

let giorno = data.getDate();
console.log(giorno)

let mese = data.getMonth()+1;
console.log(mese)

let anno = data.getFullYear();
console.log(anno)

document.write(giorno + '/' + mese + '/' + anno)


console.log(data);




let orologio = new Date();


let futureMinutes = orologio.getHours ;orologio.getMinutes();
orologio.setMinutes(orologio);

setInterval(function(){
    let n = new Date();
    document.querySelector('#orologio').innerHTML = n.getHours() + ' : '+ n.getMinutes() + ' : '
    + n.getSeconds()
})



 
