//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Inserisci la prima parola:");
const secondWord = prompt("Inserisci la seconda parola:");
const resultEl = document.querySelector(".result");

resultEl.innerHTML = firstWord;

if (firstWord.length > secondWord.length) {
   resultEl.insertAdjacentHTML("afterbegin", `<div>${secondWord}</div>`);
} else if (firstWord.length < secondWord.length){
   resultEl.insertAdjacentHTML("beforeend", `<div>${secondWord}</div>`);
} else {
   resultEl.innerHTML = "Le due parole sono lunghe uguali."
}