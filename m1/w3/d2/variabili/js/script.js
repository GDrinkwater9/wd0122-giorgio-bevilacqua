/* keyword => var
nome deifinitore => nome
operatore di assegnazione => =
valore => 'Mario';
var nome = 'Mario'; */

//stringhe ed escape

var saluto = 'ciao';
var domanda = "Com'è oggi il tempo?";
var domanda2 = 'Com\'è oggi il tempo?';
var html = '<div class="blocco"></div>';
var html2 = '<div class=\"blocco\"></div>'; // (\) prima delle virgolette

var nome = 'Giovanni'; //valore ipoteticamente definito dall'utente

var frase = "Ciao" + nome + "come stai?";

//template string

var frase2 = `Ciao ${nome} come stai?`; //backtick

console.log(frase2);
console.log(frase2.length);
console.log(frase2[0]);

var ultimoIndice = frase2.length -1;

console.log(frase2[ ultimoIndice ]);

console.log(''.length);//la lunghezza di una stringa vuota è 0

console.log('%c log colorato' , 'color:red;font-size:30px');//come applicare css ai console log

/*let e const*/

const PASSWORD = 'SAHFAUYEFBC'; //const => costante
console.log(PASSWORD);
//PASSWORD = 'r3232fko2c' => errore

var x = 1;
{
  console.log(x);  
}

let y = 2;
{
    console.log(y);
}

{
    var x2 = 1;
    console.log(x2)
}
console.log(x2)

//let è legata al blocco {}
{
    let y2 =2;//questa non è una variabile locale, che appartiene al blocco
    console.log(y2);
}
// console.log(y2); errore y2  non è definita

function scriviSaluto() {
    var s = 'Ciao';
    document.write(s);
    return s;
    
}

console.log(scriviSaluto());

scriviSaluto();

// conversione variabili

let num = 4;
let testo = '4';
// let testo = '4€';

console.log(num + testo);//num viene trasformato in stirnga 
console.log(num * testo);//testo viene trasformato in numero e quindi moltiplicato
// console.log(num * prezzo);errore perchè c'è un simbolo

let bool = false;
let valore = " <br>il valore della variabile booleana è " + bool + '<br>';

document.write(valore);

console.log(num * bool);//se convertito in numero, un valore boolano si traforma in ì se è false, in 1 se è true

let booleano = Number(true);
let errore = Number('4a');
let stringa = String(4);
console.log(booleano, errore, stringa);

let arr = ['a','b','c','d',60];
document.write(arr);//i valori vengono concatenati in una stringa e separati tra loro con una virgola



let nomi = 'Mario , Giovanni, ';

nomi += 'Carlo';
console.log(nomi);

let conto = 5;
conto += 5;
console.log(conto);


