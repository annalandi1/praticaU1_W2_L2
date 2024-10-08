/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1= 24
let num2= 35 

let biggest

if (num1 > num2) {
  biggest = num1
} else {
  biggest = num2
}
console.log(biggest)



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 4


if (number === 5 ) {
 console.log(5)
} else {
  console.log("not equal")
}




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 35

if (number1 % 5 === 0){
console.log("divisibile per 5")
}





/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
//
/* SCRIVI QUI LA TUA RISPOSTA */

let number8= 8
let number2= 6

let eight

if (number8 = 8) {
  eight = number8
} else {
  eight = number2
}
console.log("uno dei due num é ", eight)

//correzione (la parola "oppure" mi ha confusa e ho pensato bastasse fare una cosa oppure l'altra)
if (number8=== 8 || number2 === 8 || number8 + number2 === 8 || number8-number2  === 8 || number2-number8  === 8 ) {
  console.log("verificato")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const totalShoppingCart = (5 + 27 + 12+ 18)
const sconto=(totalShoppingCart + 20 /100)
let totalShoppingCart1= totalShoppingCart+10

if (sconto >= 50 ){
  console.log("Hai diritto alla consegna gratuita poiché hai speso", totalShoppingCart)
}else{
 console.log("verra aggiunto il costo della spedizione pari a ", totalShoppingCart1,)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

//vedi esercizio 5




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let a = 2
let b = 8
let c = 3


if (a>b) {
 
  crescente = a
  a=b
  b=crescente
  }
  if (a>c) {
 
  crescente = a
  a=c
  c=crescente
  }
 
  if (b>c) {

  crescente = b
  b=c;
  c=crescente
  }

console.log(crescente)





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(typeof 42)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 3

if (numero % 2 === 0) {
  console.log("pari")
}else {
  console.log("dispari")
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
  let val = 5
  if (val < 10 & val > 5) {
      console.log("Meno di 10")
    } else if (val < 5) {
      console.log("Meno di 5")
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const ciao = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
}


ciao.city = "Toronto"

console.log("me dopo aggiunta di city", ciao)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete ciao.lastName // ho ELIMINATO la proprietà newModel dentro smartphone
console.log('ciao dopo delete', ciao)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete ciao.skills[2]
console.log("ciao dopo delete 2", ciao)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function createArray(N) {
  let arrayNumeri = [];
  for (let i = 1; i <= N; i++) {
     arrayNumeri.push(i);
  }
  return arrayNumeri;
}

let N = 100;
let arr = createArray(N);
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
//vedi codice sopra 
/* SCRIVI QUI LA TUA RISPOSTA */
