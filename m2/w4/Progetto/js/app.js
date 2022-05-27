"use strict";
//PRIMO UTENTE
class FirstUser {
    constructor(credito, costoMin) {
        this.credito = 10;
        this.numeroChiamate = 0;
        this.costoChiamata = 0;
        this.credito = credito;
        this.costoMin = costoMin;
    }
    ricarica(unaRicarica) {
        this.credito = this.credito + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.costoChiamata = (minutiDurata * this.costoMin);
        this.numeroChiamate++;
        this.credito -= this.costoChiamata;
    }
    getNumeroChiamate() {
        this.numeroChiamate++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    numero404() {
        return console.log('Il tuo credito residuo è di ' + this.credito + '€');
    }
}
let u1 = new FirstUser(10, 0.20);
u1.chiamata(20);
u1.getNumeroChiamate();
u1.getNumeroChiamate();
u1.ricarica(10);
console.log('------------PRIMO UTENTE---------------');
u1.numero404();
// u1.azzeraChiamate()
console.log(u1);
//SECONDO UTENTE
class SecondUser {
    constructor(credito, costoMin) {
        this.credito = 5;
        this.numeroChiamate = 0;
        this.costoChiamata = 0;
        this.credito = credito;
        this.costoMin = costoMin;
    }
    ricarica(unaRicarica) {
        this.credito = this.credito + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.costoChiamata = (minutiDurata * this.costoMin);
        this.numeroChiamate++;
        this.credito -= this.costoChiamata;
    }
    getNumeroChiamate() {
        this.numeroChiamate++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    numero404() {
        return console.log('Il tuo credito residuo è di ' + this.credito + '€');
    }
}
let u2 = new SecondUser(5, 0.20);
u2.chiamata(15);
u2.getNumeroChiamate();
u2.getNumeroChiamate();
u2.getNumeroChiamate();
u2.ricarica(5);
console.log('------------SECONDO UTENTE---------------');
u2.numero404();
// u2.azzeraChiamate()
console.log(u2);
//TERZO UTENTE
class ThirdUser {
    constructor(credito, costoMin) {
        this.credito = 2;
        this.numeroChiamate = 0;
        this.costoChiamata = 0;
        this.credito = credito;
        this.costoMin = costoMin;
    }
    ricarica(unaRicarica) {
        this.credito = this.credito + unaRicarica;
    }
    chiamata(minutiDurata) {
        this.costoChiamata = (minutiDurata * this.costoMin);
        this.numeroChiamate++;
        this.credito -= this.costoChiamata;
    }
    getNumeroChiamate() {
        this.numeroChiamate++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    numero404() {
        return console.log('Il tuo credito residuo è di ' + this.credito + '€');
    }
}
let u3 = new ThirdUser(2, 0.20);
u3.chiamata(16);
u3.getNumeroChiamate();
u3.ricarica(25);
console.log('------------TERZO UTENTE---------------');
u3.numero404();
// u3.azzeraChiamate()
console.log(u3);
//# sourceMappingURL=app.js.map