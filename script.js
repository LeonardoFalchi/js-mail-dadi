/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */


//lista invitati
const listaInvitati = [
    "mario@bool.com",
    "alessio@bool.com",
    "simone@bool.com",
    "alice@bool.com",
    "beatrice@bool.com",
    "marco@bool.com",
    "giovanna@bool.com",
    "luca@bool.com",
    "federica@bool.com",
    "veronica@bool.com"
];
 
//chiedi all'utente la propria email
let emailUtente = prompt ("Inserisci la tua email:");
console.log (emailUtente);

//inserimento variabile per controllo email se presente
let presente = false;

//ciclo per controllo lista email
for (let i = 0; i < listaInvitati.length; i++) {
    if (listaInvitati [i]=== emailUtente) {
        presente = true;
    }
}

//stampa 
if (presente === true) {
    console.log ("Accesso consentito!");
} else {
    console.log ("Accesso negato! La tua email non è presente nella lista");
}