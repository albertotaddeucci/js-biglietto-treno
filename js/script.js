const date = new Date();
const userYear = prompt("Inserisci anno di nascita (formato: YYYY)");
const currentYear = date.getFullYear()

if(userYear<1900 || isNaN(userYear) || userYear>currentYear) {
    alert("Attenzione: data inserita non valida");
   
}

const distance = prompt("Quanti chilometri devi percorrere?");

if (isNaN(distance) || distance<1){
    alert("Attenzione: distanza inserita non valida");

}

const userAge = currentYear - userYear;


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


if (isNaN(distance) || distance<1 || userYear<1900 || isNaN(userYear) || userYear>currentYear){
    document.getElementById("ticketprice").innerHTML = "Errore"

} else {
    document.getElementById("ticketprice").innerHTML = 
    `<b>${finalPrice.toFixed(2)}€</b>`
;

}

