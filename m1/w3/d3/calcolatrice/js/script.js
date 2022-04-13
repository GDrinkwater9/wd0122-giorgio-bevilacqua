/** se voglio scrivere dentro un form innerText e innerHTML */

function aggiungiNumero(bottone){
    
    let numero = bottone.innerHTML;//è un stringa

    let display = document.querySelector('#display');//seleziono l'elemento con cui andro ad interagire

    display.value += numero//mi aggancio all'elemento contenuto nella variabile display, per modificarne l'attributo value, provocand l'apparizione dei nuemeri

}

function risultato(){
    let display = document.querySelector('#display')

    let totale = eval(display.value)

    display.value = totale
}