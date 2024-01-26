
const userYear = prompt("Inserisci anno di nascita (formato: YYYY)");
const distance = prompt("Quanti chilometri devi percorrere?");
const date = new Date();
const userAge = date.getFullYear() - userYear;

// costo biglietto intero
const ticketPrice = 0.21 * distance;
let discountPrice;

// controllo se dati inseriti sono numerici
if ( isNaN(userYear) || isNaN(distance)) {
    alert("Attenzione: non è stato inserito un valore numerico in uno dei campi precedenti");

} else {

    // calcolo sconto    
    if (userAge<18){
        discountPrice = ticketPrice * 0.2;
          
    } else if (userAge>65){
        discountPrice = ticketPrice * 0.4;
      
        
    } else {
        discountPrice = 0;
    }

}


// biglietto scontato
const finalPrice = ticketPrice - discountPrice;

// visualizzazione a schermo arrotondata a 2 decimali
document.getElementById("ticketprice").innerHTML = 
    `<b>${finalPrice.toFixed(2)}€</b>`
;