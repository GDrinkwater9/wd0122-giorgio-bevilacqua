"use strict";
const APPURL = 'json/abbigliamento.json';
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantità, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivaesclusa = Math.ceil(prezzoivaesclusa);
        this.prezzoivainclusa = Math.ceil(prezzoivainclusa);
        this.disponibile = disponibile;
        this.saldo = Math.ceil(saldo);
    }
    getSaldoCapo() {
        let saldoCapo = (this.prezzoivainclusa * this.saldo) / 100;
        return this.prezzoivainclusa - saldoCapo;
    }
    getAcquistoCapo() {
        let acquistoCapo = this.prezzoivainclusa;
        return acquistoCapo;
    }
}
fetch(APPURL).then(res => res.json()).then(res => {
    let arrVestiti = [];
    for (let vestito of res) {
        let vestiti = new Abbigliamento(vestito.id, vestito.codprod, vestito.collezione, vestito.capo, vestito.modello, vestito.quantità, vestito.colore, vestito.prezzoivaesclusa, vestito.prezzoivainclusa, vestito.disponibile, vestito.saldo);
        arrVestiti.push(vestiti);
    }
    return arrVestiti;
}).then(res => {
    for (let vestito of res) {
        console.log(vestito.capo + ' - ' + vestito.getSaldoCapo() + ' %');
        console.log(vestito.getAcquistoCapo() + '€');
    }
});
//# sourceMappingURL=app.js.map