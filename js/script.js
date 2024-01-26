/*
Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere e l'età del passeggero.

Calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
*/

const userYear = prompt("Inserisci anno di nascita");
const distance = prompt("Quanti chilometri devi percorrere?");
const date = new Date();
const userAge = date.getFullYear() - userYear

// costo biglietto intero
const ticketPrice = 0.21 * distance;

// calcolo sconto
let discountPrice;
if (userAge<18){
    discountPrice = ticketPrice * 0.2;

} else if (userAge>65){
    discountPrice = ticketPrice * 0.4;
    
} else {
    discountPrice = 0;
}

// biglietto scontato
const finalPrice = ticketPrice - discountPrice;

// visualizzazione a schermo arrotondata a 2 decimali
document.getElementById("ticketprice").innerHTML = 
    `Il prezzo del biglietto è pari a ${finalPrice.toFixed(2)}€`
;