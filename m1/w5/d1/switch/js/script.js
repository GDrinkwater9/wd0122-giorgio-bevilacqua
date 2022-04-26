/* SWITCH */

let frutto = 'Banana';
switch(frutto){
    case "Banana":
        console.log('Le banane costano 0.92 al kg');
            break;
        case "Mele":
        console.log('Le mele constano 0.64 al kg');
            break;
        case "Manghi":
            console.log('posso fare qualcosa se voglio');
        case "Papaye":
            console.log('I manghi e le papaye costano 1.79 al kg');
            break;
        default:
            console.log('Siamo spiacenti, non disponiamo di ' + frutto);
}

/* WHILE*/

//LOOP INFINITO

// let condizione = true;
// while(condizione){
//     console.log('test');
// }

let x = 0;
while(x < 10){
    console.log('test n°:' + x);
    x++
}

let frutta = ['Mele','Pere','Banane'];
let y = 0;

while(y <= 2){
    console.log(frutta[y],y);
    y++
}

/*  DO/WHILE 
------------------------------
*/
let h = 0;

do{
    console.log('test n°:' + h);
    h++
}
while(h > 2)//condizione falsa

//se la condizione è falsa
//Il codice verrà eseguito una sola volta
//in caso contraria funziona come il while

/*---------------------------------*/

//se devo ciclare un array scelgo il forEach o il forOff
//for of più innovativo e più efficente

for(let i = 0; i < 10; i++){
    console.log(i);
}

let pizze = ['Margherita','Diavola','Marinara']

document.write(`<ul>`)

for(let i = 0; i < 3; i++){
    document.write( `<li>${pizze[i]}</li>` )
}
document.write(`</ul>`)

/*----------------*/
/* forEach = per ogni
e non restitusce nulla */

let food = ['Margherita','Diavola','Marinara']

document.write(`<ul>`)

food.forEach(function(el,i){
    //el è equivalente a pizze[i] del ciclo for
    document.write( `<li>${i+1} - ${el}</li>`)

})

document.write(`</ul>`)

/* forEach vs map */

let num = [1,2,3,4,5,6,7,8,9]
let f = []

num.forEach(function(el){

    if(el > 4){
        f.push(el)
    }
})
   
console.log(f);

let numeriMoltiplicati = num.map(el => el * 2)
console.log(numeriMoltiplicati);

/* filter */
num = [1,2,3,4,5,6,7,8,9]

let filtro = num.filter(el => el > 4)
console.log(filtro);

/* reduce*/

function somma(a,b,c){
    return a+b+c;
}

console.log(somma(2,2,3))

num = [1,2,3,4,5,6,7,8,9]
let sum = num.reduce((precedente,attuale) => {
console.log(precedente,attuale);
return precedente + attuale// return è obbligatorio per le funzioni freccia a più di una riga, diventano obbligatorie anche le parentesu graffe 
})

//forma ristretta
//let sum = num.reduce((precedente,attuale) => precedente + attuale)

console.log(sum)


//-----------FOR OF-----------//

let nome = 'Giancarlo';

for(let l of nome){
    document.write(`<div>${l}</div>`)
}
for(let p of pizze){
    document.write(`<div>${p}</div>`)
}

//for in si utilizza per ciclare un oggetto //
//-----------FOR IN-----------//

let user =  {
nome: 'Mario',
cognome: 'Rossi',
eta: 30
}

for(let prop in user){
   
    console.log(prop + ': '+ user[prop]);
    
}
console.log('_________________')
console.log('VERSIONE FILTRATA SOTTO')
console.log('_________________')
//filtrare in un for in

let campiDaVisualizzare = ['nome','cognome']

for(let prop in user){
    if(campiDaVisualizzare.includes(prop)){
    console.log(prop + ': '+ user[prop]);
    }
}





