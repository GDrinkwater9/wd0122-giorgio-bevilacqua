//----CALLBACK----//

function scrivi(testo, callback){
    let testoDefinitivo = callback(testo)
    document.write(testoDefinitivo);
}

function grassetto(t){
    return '<b>'+t+'</b>'
}
function corsivo(t){
    return '<i>'+t+'</i>'
}

scrivi('Grassetto',grassetto)
scrivi(' Corsivo',corsivo)

