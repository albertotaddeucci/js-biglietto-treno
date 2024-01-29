/*Scrivi un programma che prende tre numeri in input usando prompt.
 Calcola la media di questi numeri e visualizza il risultato con almeno due decimali.
*/

const firstNum = Number(prompt("Inserisci primo numero"));


if(isNaN(firstNum)){
    alert("Attenzione: non hai inserito un numero!");
}

const secondNum = Number(prompt("Inserisci secondo numero"));


if(isNaN(secondNum)){
    alert("Attenzione: non hai inserito un numero!");
}

let average;

average = (firstNum + secondNum) / 2;

document.getElementById("average").innerHTML = `La media tra i due numeri è pari a <b> ${average.toFixed(2)} </b>`;