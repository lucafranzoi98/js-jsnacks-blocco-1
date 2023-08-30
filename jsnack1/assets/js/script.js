// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/* const firstNumber = Number(prompt("Inserisci il primo numero:"));
const secondNumber = Number(prompt("Inserisci il secondo numero:"));
const resultEl = document.querySelector(".result");

if (firstNumber > secondNumber) {
   resultEl.innerHTML = `<div>${firstNumber}</div>`;
} else if (firstNumber < secondNumber) {
   resultEl.innerHTML = `<div>${secondNumber}</div>`;
} else {
   resultEl.innerHTML = `<div>I numeri sono uguali.</div>`;
} */

const numberList = [];
const resultEl = document.querySelector(".result");

while (numberList.length < 2) {
   const number = Number(prompt("Inserisci un numero:"));
   if (isNaN(number)) {
      alert("Non è un numero!")
   } else {
      numberList.push(number);
   }
   
}

console.log(numberList);

if (numberList[0] > numberList[1]) {
   resultEl.innerHTML = `<div>${numberList[0]}</div>`;
} else if (numberList[0] < numberList[1]) {
   resultEl.innerHTML = `<div>${numberList[1]}</div>`;
} else {
   resultEl.innerHTML = `<div>I numeri sono uguali.</div>`;
}
