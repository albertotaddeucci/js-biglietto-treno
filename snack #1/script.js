/*Crea un programma che chiede all'utente una temperatura in gradi Celsius
 e la converte in Fahrenheit

Visualizza la temperatura convertita.*/


const tempCelsius = Number(prompt("Inserisci la temperatura in gradi Celsius da convertire"));

if (isNaN(tempCelsius)){
    alert ("Attenzione: inserire valore numerico");
}

let tempFaren;

tempFaren = ( tempCelsius * 9/5 ) + 32;

// console.log(tempFaren)

document.getElementById("conversion").innerHTML = `${tempFaren}°F`;
