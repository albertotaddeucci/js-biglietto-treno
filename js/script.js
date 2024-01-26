const date = new Date();
let userYear = prompt("Inserisci anno di nascita (formato: YYYY)");

const currentYear = date.getFullYear()

// controllo anno
if(userYear<1900 || isNaN(userYear) || userYear>currentYear) {
    alert("Attenzione: data inserita non valida");
    userYear = "errore"   
}

let distance = prompt("Quanti chilometri devi percorrere?");

// controllo distanza

if (isNaN(distance) || distance<1){
    alert("Attenzione: distanza inserita non valida");
    distance = "errore"
}

// calcolo età
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


// messaggio errore o visualizzazione a schermo prezzo
if (userYear === "errore" || distance === "errore"){
    document.getElementById("ticketprice").innerHTML = "Errore"
} else {
    document.getElementById("ticketprice").innerHTML = 
    `<b>${finalPrice.toFixed(2)}€</b>`
}



