class SonAccount{
    public saldoIniziale:number;
    constructor(saldoIniziale:number){
        this.saldoIniziale = saldoIniziale
    }
    deposit(deposito:number){
        return this.saldoIniziale = this.saldoIniziale + deposito
    }
    oneWithdraw(prelievo:number){
        this.saldoIniziale = this.saldoIniziale - prelievo
        return prelievo
    }
    twoWithdraw(prelievo:number){
        this.saldoIniziale = this.saldoIniziale - prelievo
        return prelievo
    }
    totalBalance(){
        return this.saldoIniziale + '€'
    }
}
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
let son = new SonAccount(0)
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());

class MotherAccount {
    public saldoIniziale:number;
    constructor(saldoIniziale:number){
        this.saldoIniziale = saldoIniziale
    }
    deposit(deposito:number){
        return this.saldoIniziale = this.saldoIniziale + deposito
    }
    oneWithdraw(prelievo:number){
        this.saldoIniziale = this.saldoIniziale - prelievo
        return prelievo
    }
    twoWithdraw(prelievo:number){
        this.saldoIniziale = this.saldoIniziale - prelievo
        return prelievo
    }
    totalBalance(){
        var sconto:number = 10 
        return this.saldoIniziale -((this.saldoIniziale*sconto/100)) + '€'
    }
}
let mother = new MotherAccount(0)
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
