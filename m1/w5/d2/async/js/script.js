//FUNZIONE ASINCRONA

function prom(){
    return new Promise(function(resolve){

    setTimeout(function(){
        resolve('ok');
    },5000)

})

}
    async function scrivi(){
        let res = await prom().then(res => res)
       
        console.log(res);
    }

    scrivi()