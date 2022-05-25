abstract class Lavoratori{
    codRedd:number;
    redditoAnnuoLordo:number;
    tasseInps:number;
    tasseIrpef:number;



    constructor(codRedd:number,redditoAnnuoLordo:number,tasseInps:number,tasseIrpef:number,){
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
   
    }
    getUtileTasse():number{
       let utileTasse = this.redditoAnnuoLordo + ((this.redditoAnnuoLordo*this.codRedd)/100)
        return utileTasse
    }
    getTasseInps():number{
        let totaleInps = (this.redditoAnnuoLordo * this.tasseInps)/100
        return totaleInps
    }
    getTasseIrpef():number{
        let totaleIrpef = (this.redditoAnnuoLordo*this.tasseIrpef)/100
        return totaleIrpef
    }
    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
        return redditoAnnuoNetto
    }
}

class Artigiano extends Lavoratori{
    constructor(codRedd:number,redditoAnnuoLordo:number,tasseInps:number,tasseIrpef:number){
        super(codRedd,redditoAnnuoLordo,tasseInps,tasseIrpef)
    }

}
class LiberoProfessionista extends Lavoratori{
    constructor(codRedd:number,redditoAnnuoLordo:number,tasseInps:number,tasseIrpef:number){
        super(codRedd,redditoAnnuoLordo,tasseInps,tasseIrpef)
    }
}
class Commerciante extends Lavoratori{
    constructor(codRedd:number,redditoAnnuoLordo:number,tasseInps:number,tasseIrpef:number){
        super(codRedd,redditoAnnuoLordo,tasseInps,tasseIrpef)
    }
}

let l1 = new Artigiano(5, 20000,4,3);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');

let l2 = new LiberoProfessionista(7,25000,5,3);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');

let l3 = new Commerciante(9, 27000,7,5);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');