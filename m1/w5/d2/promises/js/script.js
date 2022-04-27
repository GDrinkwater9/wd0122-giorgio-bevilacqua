
//----PROMISES----//

//è un costrutto di js che permette di gestire un dato che al momento non è disponibile//


let promise = new Promise(function(resolve,reject){
    let password = 'password'
    if(password == 'password'){
        resolve('accesso consentito')
    }else{
        reject('accesso NON consentito')
    }
})

//then metodo delle promise

promise
.then(function(s){
    console.log(s);
},function(e){
    console.log(e);

})

let timer = new Promise(function(resolve){

setTimeout(function(){
resolve( 'ok' );
},5000)

})

console.log(1)
timer.then(function(data){
    console.log(data);
})
console.log(2);