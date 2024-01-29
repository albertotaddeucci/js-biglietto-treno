/*Scrivi un programma che simula il gioco di "Carta, forbice, sasso". 
Chiedi all'utente di fare una scelta,
confrontala con una scelta casuale del computer. 
Determina il vincitore o se c'è un pareggio */

// scelta carta sasso foirbici
let userChoice = prompt("scegli tra carta, sasso o forbici")

const pcNum = Math.floor(Math.random() * 9) + 1;

// console.log(pcNum)

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



// console.log(pcChoice)

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

