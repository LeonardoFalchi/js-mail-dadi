/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

//genera un numero random da 1 a 6 per il giocatore e computer
let numeroGiocatore = Math.floor (Math.random() * 6) + 1;
let numeroComputer = Math.floor (Math.random() * 6) + 1;

//stampa numeri generati
console.log ("Punteggio giocatore: " + numeroGiocatore);
console.log ("Punteggio computer: " + numeroComputer);

//confronto punteggi
if (numeroGiocatore > numeroComputer) {
    console.log ("Il giocatore vince");
} else if (numeroGiocatore < numeroComputer) {
    console.log ("Il computer vince");
} else {
    console.log ("Pareggio");
}


