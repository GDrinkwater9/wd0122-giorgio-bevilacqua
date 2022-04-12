function cambiaSfondo(e){
    
    console.log(e);
    //il codice commentato si riferisce allo step precendente, in cui "e" era un indice che indicava il blocco cliccato
    // let blocchi = document.getElementsByClassName('blocco')//array di elementi con la classe blocco
    // blocchi[e].style.style.backgroundColor = 'purple';

    let colore = e.getAttribute('data-colore');
    console.log(colore);

    if(e.style.backgroundColor == ''){
        e.style.backgroundColor = colore;
    }else{
        e.style.backgroundColor = '';
    }

}
