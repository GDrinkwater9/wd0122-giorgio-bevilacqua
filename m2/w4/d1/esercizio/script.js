alert('Chi vincerà tra Giocatore1 e Giocatore2');
var g1 = prompt('Giocatore 1 dice');
var g2 = prompt('Giocatore 2 dice');
var nRandom;
nRandom = Math.floor(Math.random() * (100 - 1) + 1);
var diff1;
var diff2;
if (g1 == nRandom) {
    alert("Giocatore1 ha vinto!");
}
else {
    diff1 = Math.abs(nRandom - g1);
}
if (g2 == nRandom) {
    alert("Giocatore2 ha vinto!");
}
else {
    diff2 = Math.abs(nRandom - g2);
}
if (diff1 < diff2) {
    alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più! il numero era " + nRandom);
}
else if (diff1 > diff2) {
    alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più! il numero era " + nRandom);
}
