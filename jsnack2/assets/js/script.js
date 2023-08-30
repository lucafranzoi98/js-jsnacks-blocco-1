//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/* const firstWord = prompt("Inserisci la prima parola:");
const secondWord = prompt("Inserisci la seconda parola:");
const resultEl = document.querySelector(".result");

resultEl.innerHTML = firstWord;

if (firstWord.length > secondWord.length) {
   resultEl.insertAdjacentHTML("afterbegin", `<div>${secondWord}</div>`);
} else if (firstWord.length < secondWord.length){
   resultEl.insertAdjacentHTML("beforeend", `<div>${secondWord}</div>`);
} else {
   resultEl.innerHTML = "Le due parole sono lunghe uguali."
} */

const list = [];
const resultEl = document.querySelector(".result");

while (list.length < 2) {
   let word = prompt("Inserisci una parola:")

   if (word === "") {
      alert("Inserisci una parola!")
   } else {
      list.push(word);
   }
   
}

resultEl.innerHTML = list[0];

if (list[0].length > list[1].length) {
   resultEl.insertAdjacentHTML("afterbegin", `<div>${list[1]}</div>`);
} else if (list[0].length < list[1].length) {
   resultEl.insertAdjacentHTML("beforeend", `<div>${list[1]}</div>`);
} else {
   resultEl.innerHTML = "Le due parole sono lunghe uguali."
}