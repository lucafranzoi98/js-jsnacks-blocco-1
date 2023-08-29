// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const oddNumbers = [];
const resultEl = document.querySelector(".result")

for (let i = 0; i < 6; i++) {
   const userNumber = Number(prompt("Inserisci un numero:"));

   if (userNumber % 2 == 0) {
      
   } else {
      oddNumbers.push(userNumber);
   }
   
}

resultEl.innerHTML = oddNumbers;