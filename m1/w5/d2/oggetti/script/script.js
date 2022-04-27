let j = {}//oggetto vuoto

//----------OGGETTI-----------//


let pizza = {
    gusto: 'Margherita',
    tipo: 'Napoletana' ,
    prezzo: 5,
    dettagli: function(){
        console.log('La pizza Margherita  costa 5 euro')
    }
}


console.log(pizza.gusto);

pizza.gusto = 'Diavola';

console.log(pizza.gusto);

// document.write(pizza)//questo vi darà errore

pizza.dettagli()//è metodo (nome.METODO)

function dettagli(){
    console.log('è una funzione differente');
}


dettagli()//è una funzione


/**
 * Costruttore dell'oggetto
 */


function Pizza(g,t = 'Napoletana',p = 5){
    this.gusto = g //this appartiene all'oggetto che verrà modificato
    this.tipo = t 
    this.prezzo = p
    this.sconto = 0
    this.dettagli = function(){
        console.log('La pizza '+this.gusto+' di tipo '+this.tipo+' costa '+this.prezzo+' €');
    }
    this.prova = function(){
        this.dettagli()//posso lanciare un metodo all'interno dell'oggetto a cui appartiene  
    }
}


let margherita = new Pizza('Margherita')
let margherita2 = new Pizza('Margherita','Pinsa','7')
let diavola = new Pizza('Diavola','Napoletana',1)

console.log(margherita);
console.log(margherita2);

margherita.dettagli()
margherita2.dettagli()
diavola.sconto = 5
diavola.dettagli()


Pizza.prototype.disponibilita = true

Pizza.prototype.prova = function(){
    this.dettagli()//posso lanciare un metodo all'interno dell'oggetto a cui appartiene  
}

