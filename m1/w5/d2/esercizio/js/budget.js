function iniziaShopping() {

    let budget = 1000;
    let operazioni = 0;

    while (budget > 0) {

        let prezzi = Math.floor(Math.random() * 100);

        if (prezzi <= budget) {
            operazioni += 1;
            budget = budget - prezzi;

            document.getElementById('mio_budget').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }
        

        if (budget < 500 && budget >450) {
            document.getElementById('mio_budget').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
            document.getElementById('mio_budget').innerHTML += '<h1>stai attento,sei a metà<h1>';
        }
        if (budget == 0) {
            document.getElementById('messaggio2').innerHTML = '<h1>vai a lavorare<h1>';
            break;
        }
        
    }

    document.getElementById('mio_budget').innerHTML += '<p>Hai acquistato: ' + operazioni + ' oggetti </p>';

}