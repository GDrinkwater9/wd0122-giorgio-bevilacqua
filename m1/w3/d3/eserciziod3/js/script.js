function calcoloAnni(compleanno){
    return 2030 - compleanno
}

const anni = calcoloAnni(1996);
console.log(anni);

const calcolaAnni2 = compleanno => 2040 - compleanno;

let anni2 = calcolaAnni2(1990);
console.log(anni2);

function lavoro(aT){ //anni tirocinio

    return function(aA){ //anni assunzione
        return function(aR){ //anni da responsabile
            return aT + aA + aR;
        }
    }

}

let tempoInAzienda = lavoro(1)(2)(1)
console.log(tempoInAzienda);

let eta = prompt('Inserisci la tua età');

let patente = eta >= 18 ? 'Si, puoi prendere la patente' : 'No, puoi prendere la patente' ;
console.log(patente);


