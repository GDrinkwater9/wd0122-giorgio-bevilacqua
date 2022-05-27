interface Ismartphone{
    credito:number
    costoMin:number
    ricarica(unaRicarica:number):void
    chiamata(minutiDurata:number):void
 
}

//PRIMO UTENTE

class FirstUser implements Ismartphone{
    credito: number = 10
    costoMin:number 
    numeroChiamate:number = 0
    costoChiamata:number = 0

    constructor(credito:number,costoMin:number){
        this.credito = credito
        this.costoMin = costoMin
  
    }
    ricarica(unaRicarica:number):void{
    this.credito = this.credito + unaRicarica   

    }
    chiamata(minutiDurata:number):void{  
       this.costoChiamata = (minutiDurata*this.costoMin)
        this.numeroChiamate++
        this.credito -= this.costoChiamata
    }
    getNumeroChiamate():void{
        this.numeroChiamate++
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0
    }

    numero404(){
        return console.log('Il tuo credito residuo è di ' +this.credito+'€')
    }
}

let u1:FirstUser = new FirstUser(10,0.20)
    
    u1.chiamata(20)
    u1.getNumeroChiamate()
    u1.getNumeroChiamate()
    u1.ricarica(10)
    console.log('------------PRIMO UTENTE---------------');
    u1.numero404()
    // u1.azzeraChiamate()
    console.log(u1);

    //SECONDO UTENTE

    class SecondUser implements Ismartphone{
        credito: number = 5
        costoMin:number 
        numeroChiamate:number = 0
        costoChiamata:number = 0
    
        constructor(credito:number,costoMin:number){
            this.credito = credito
            this.costoMin = costoMin
      
        }
        ricarica(unaRicarica:number):void{
        this.credito = this.credito + unaRicarica   
    
        }
        chiamata(minutiDurata:number):void{  
           this.costoChiamata = (minutiDurata*this.costoMin)
            this.numeroChiamate++
            this.credito -= this.costoChiamata
        }
        getNumeroChiamate():void{
            this.numeroChiamate++
        }
    
        azzeraChiamate():void{
            this.numeroChiamate = 0
        }
    
        numero404(){
            return console.log('Il tuo credito residuo è di ' +this.credito+'€')
        }
    }
    
    let u2:SecondUser = new SecondUser(5,0.20)
        
        u2.chiamata(15)
        u2.getNumeroChiamate()
        u2.getNumeroChiamate()
        u2.getNumeroChiamate()
        u2.ricarica(5)
        console.log('------------SECONDO UTENTE---------------');
        u2.numero404()
          // u2.azzeraChiamate()
        console.log(u2);
    
        //TERZO UTENTE

        class ThirdUser implements Ismartphone{
            credito: number = 2
            costoMin:number 
            numeroChiamate:number = 0
            costoChiamata:number = 0
        
            constructor(credito:number,costoMin:number){
                this.credito = credito
                this.costoMin = costoMin
          
            }
            ricarica(unaRicarica:number):void{
            this.credito = this.credito + unaRicarica   
        
            }
            chiamata(minutiDurata:number):void{  
               this.costoChiamata = (minutiDurata*this.costoMin)
                this.numeroChiamate++
                this.credito -= this.costoChiamata
            }
            getNumeroChiamate():void{
                this.numeroChiamate++
            }
        
            azzeraChiamate():void{
                this.numeroChiamate = 0
            }
        
            numero404(){
                return console.log('Il tuo credito residuo è di ' +this.credito+'€')
            }
        }
        
        let u3:ThirdUser = new ThirdUser(2,0.20)
            
            u3.chiamata(16)
            u3.getNumeroChiamate()
            u3.ricarica(25)
            console.log('------------TERZO UTENTE---------------');
            u3.numero404()
              // u3.azzeraChiamate()
            console.log(u3);
        
        
        