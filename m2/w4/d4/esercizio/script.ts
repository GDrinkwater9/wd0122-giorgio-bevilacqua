const APPURL:string = 'json/abbigliamento.json'


       class Abbigliamento{
            public id:number;
            public codprod:string;
            public collezione:string;
            public capo:string;
            public modello:number;
            public quantità:number;
            public colore:string;
            private prezzoivaesclusa:number;
            public prezzoivainclusa:number;
            public disponibile:string;
            public saldo:number
        
        constructor(id:number,codprod:string,collezione:string,capo:string, modello:number,quantità:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
            this.id = id
            this.codprod = codprod
            this.collezione = collezione
            this.capo = capo
            this.modello = modello
            this.quantità = quantità
            this.colore = colore
            this.prezzoivaesclusa = Math.ceil(prezzoivaesclusa)
            this.prezzoivainclusa = Math.ceil(prezzoivainclusa)
            this.disponibile = disponibile
            this.saldo = Math.ceil(saldo) 
        }

        getSaldoCapo():number{
            let saldoCapo = (this.prezzoivainclusa * this.saldo)/100
           
            return this.prezzoivainclusa - saldoCapo
        }

        getAcquistoCapo():number{
            let acquistoCapo = this.prezzoivainclusa
            return acquistoCapo
        }
    

        }

       fetch(APPURL).then(res => res.json()).then(res =>{
           let arrVestiti:any = []
           for(let vestito of res){
               let vestiti = new Abbigliamento(vestito.id,vestito.codprod,vestito.collezione,vestito.capo,vestito.modello,vestito.quantità,vestito.colore,vestito.prezzoivaesclusa,vestito.prezzoivainclusa,vestito.disponibile,vestito.saldo)

               arrVestiti.push(vestiti)
           }return arrVestiti
       }).then(res => {
           for(let vestito of res){
               console.log(vestito.capo+' - '+ vestito.getSaldoCapo()+' %');
               console.log(vestito.getAcquistoCapo()+'€');
               
               
           }

       })
       