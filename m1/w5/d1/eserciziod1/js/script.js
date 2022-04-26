let data = new Date();

let giorno = data.getDate();

let mese = data.getMonth()

let anno = data.getFullYear();

document.write(giorno + '/' + mese + '/' + anno)


console.log(data);




let orologio = new Date();


let futureMinutes = orologio.getHours ;orologio.getMinutes();
orologio.setMinutes( orologio);



    setInterval(function(){
        let n = new Date();
        document.querySelector('#orologio').innerHTML = n.getHours() + ' : '+ n.getMinutes() + ' : '
        + n.getSeconds()
    })

 
