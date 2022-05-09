class Automobile{
    constructor(_marca, _colore){

        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
        this.prezzo = 10000
    }
    sconto(percentuale){
        this.prezzo = (this.prezzo / 100) * (100 - percentuale)
    }
}


let mercedes = new Automobile('Mercedes', 'Nero')

console.log(mercedes)
mercedes.sconto(10)
console.table(mercedes);

let ferrari = new Automobile('Ferarri','rossa')
let lamborghini = new Automobile('Lamborghini', 'Gialla')

Automobile.prototype.brandProtetto = true 

console.table([ferrari, lamborghini])
console.table(ferrari.brandProtetto)