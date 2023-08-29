// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const firstNumber = Number(prompt("Inserisci il primo numero:"));
const secondNumber = Number(prompt("Inserisci il secondo numero:"));
const resultEl = document.querySelector(".result");

if (firstNumber > secondNumber) {
   resultEl.innerHTML = `<div>${firstNumber}</div>`;
} else if (firstNumber < secondNumber) {
   resultEl.innerHTML = `<div>${secondNumber}</div>`;
} else {
   resultEl.innerHTML = `<div>I numeri sono uguali.</div>`;
}