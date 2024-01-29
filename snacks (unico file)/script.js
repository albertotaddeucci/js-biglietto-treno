let progChoice = prompt("Scegli il programma da utilizzare:\nDigita 1 per convertire Celsius in Fahrenheit\nDigita 2 per calcolare la media tra due numeri \nDigita 3 per giocare a sasso carta, forbici!")

if (progChoice === "1"){
    
    const tempCelsius = Number(prompt("Inserisci la temperatura in gradi Celsius da convertire"));

    if (isNaN(tempCelsius)){
    alert ("Attenzione: inserire valore numerico");
    }

    let tempFaren;
    tempFaren = ( tempCelsius * 9/5 ) + 32;

    document.getElementById("conversion").innerHTML = `La temperatura da te scelta è pari a <b>${tempFaren}°F</b>`;

} else if (progChoice === "2"){

    const firstNum = Number(prompt("Inserisci il primo numero"));

    if(isNaN(firstNum)){
    alert("Attenzione: non hai inserito un numero!");
    }

    const secondNum = Number(prompt("Inserisci il secondo numero"));

    if(isNaN(secondNum)){
    alert("Attenzione: non hai inserito un numero!");
    }

    let average;

    average = (firstNum + secondNum) / 2;

    document.getElementById("average").innerHTML = `La media tra i due numeri è pari a <b> ${average.toFixed(2)} </b>`;

} else if (progChoice === "3"){
    
    let userChoice = prompt("scegli tra carta, sasso o forbici");

    const pcNum = Math.floor(Math.random() * 9) + 1;

    let pcChoice;

    if(pcNum < 4){
        pcChoice = "carta";
    } else if (pcNum > 6){
        pcChoice = "forbici";
    } else {
        pcChoice = "sasso";
    }

    document.getElementById("userchoice").innerHTML = `Hai scelto ${userChoice}`;
    document.getElementById("pcchoice").innerHTML = `Il PC ha scelto ${pcChoice}`;


    if (userChoice === pcChoice){
        document.getElementById("resultP").innerHTML = "È un pareggio!";
    } else if ((userChoice === "carta" && pcChoice === "sasso") || (userChoice === "sasso" && pcChoice === "forbici") || (userChoice === "forbici" && pcChoice === "carta")){
        document.getElementById("resultW").innerHTML = "Hai vinto! :)";

    } else if ((userChoice != "carta") &&( userChoice != "sasso") && (userChoice != "forbici")){
        alert("Attenzione: non hai inserito una tra le parole a disposizione, riprova.")
        document.getElementById("resultL").innerHTML = "Hai sbagliato qualcosa :/";            

    } else {
        document.getElementById("resultL").innerHTML = "Hai perso! :(";

    }

} else {
    document.getElementById("resultL").innerHTML = "Attenzione! Inserisci uno dei tre numeri!";

}








// // scelta carta sasso foirbici
// let userChoice = prompt("scegli tra carta, sasso o forbici")

// const pcNum = Math.floor(Math.random() * 9) + 1;

// // console.log(pcNum)

// let pcChoice;

// if(pcNum < 4){
//     pcChoice = "carta";
// } else if (pcNum > 6){
//     pcChoice = "forbici";
// } else {
//     pcChoice = "sasso";
// }

// document.getElementById("userchoice").innerHTML = `Hai scelto ${userChoice}`;
// document.getElementById("pcchoice").innerHTML = `Il PC ha scelto ${pcChoice}`;



// // console.log(pcChoice)

// if (userChoice === pcChoice){
//     document.getElementById("resultP").innerHTML = "È un pareggio!";
// } else if ((userChoice === "carta" && pcChoice === "sasso") || (userChoice === "sasso" && pcChoice === "forbici") || (userChoice === "forbici" && pcChoice === "carta")){
//     document.getElementById("resultW").innerHTML = "Hai vinto! :)";

// } else if ((userChoice != "carta") &&( userChoice != "sasso") && (userChoice != "forbici")){
//     alert("Attenzione: non hai inserito una tra le parole a disposizione, riprova.")
//     document.getElementById("resultL").innerHTML = "Hai sbagliato qualcosa :/";            

// } else {
//     document.getElementById("resultL").innerHTML = "Hai perso! :(";

// }

