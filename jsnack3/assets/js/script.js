// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

/* const sumEl = document.querySelector(".sum");
let sum = 0;

for (let i = 0; i < 10; i++) {
   const userNumber = Number(prompt("Inserisci un numero:"));
   sum += userNumber;
}

sumEl.innerHTML = sum; */

const sumEl = document.querySelector(".sum");
let sum = 0;
let i = 0;

while (i < 10) {
   const userNumber = Number(prompt("Inserisci un numero"));
   
   if (isNaN(userNumber)) {
      alert("Inserisci un numero");
      i--;
   } else {
      sum += userNumber;      
   }
   
   i++;
}

sumEl.innerHTML = sum;