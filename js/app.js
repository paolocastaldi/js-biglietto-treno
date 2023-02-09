const userDistance = prompt('Quanti km vuoi percorrere?');
console.log('Distanza ', userDistance);

//Età
const userAge = prompt('Quanti anni hai?');
console.log('Età ', userAge);

//PREZZO IN BASE AI KM
const priceBase = 0.21 * userDistance;
console.log('Prezzo biglietto ', priceBase);

//BIGLIETTO IN BASE ALL'ETà
if (userAge < 18) {
    ticket_1 = ((priceBase * 80) / 100);
    console.log('Prezzo biglietto finale ', ticket_1.toFixed(2));
} else if (18 < userAge < 65) {
    ticket_1 = priceBase;
    console.log('Prezzo biglietto finale ', ticket_1.toFixed(2));
} else if (userAge > 65) {
    ticket_1 = ((priceBase * 60) / 100);
    console.log('Prezzo biglietto finale ', ticket_1.toFixed(2));
}

//BIGLIETTO 
document.getElementById('prezzo_biglietto_finale').innerHTML = 'Il prezzo del biglietto sarà di € ', ticket_1;
