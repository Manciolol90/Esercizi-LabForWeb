//stampa in pagina 100 li con i numeri da 1 a 90, se il numero è pari colora il background di azzurro, se è dispari di verde, se è un multiplo di 10 colora il background di giallo.

let ul = document.querySelector(".lista"); //seleziono la ul
//ho provato a dichiarare qui il let li = ul.lastElementChild; per selezionare l'ultimo li (che ancora non esiste, lo creo con le funzioni dopo) ma non funziona, mi genera solo 2 quadratini grigi con scritto 1 dentro
const arrayNumeri = [];

//metodo diretto
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 90; i++) {
    ul.innerHTML += `<li>${i}</li>`;
    let li = ul.lastElementChild;
    controlloNumero(i, li);
    controlloPariDispari(i, li);
  }
});

/* in questo modo genera due volte la griglia, una volta col metodo diretto e una seconda volta a partire dall'array. amen, va commentata una delle funzioni */

function controlloNumero(numero, li) {
  if (numero % 10 === 0) {
    li.classList.add("ten");
  } else if (numero % 2 === 0) {
    li.classList.add("even");
  } else {
    li.classList.add("odd");
  }
}

// Bonus
//crea un array con i 90 numeri e modifica lo script per usare gli elementi dell'array.

function generaArray() {
  for (let i = 1; i <= 90; i++) {
    arrayNumeri.push(i);
  }
}

//metodo con array

document.addEventListener("DOMContentLoaded", function () {
  generaArray(); //crea l'array con i numeri da 1 a 90
  for (let i = 0; i < arrayNumeri.length; i++) {
    //per ogni elemento dell'array creaiamo un <li></li> con il numero corretto dentro
    ul.innerHTML += `<li>${arrayNumeri[i]}</li>`;
    let li = ul.lastElementChild;
    controlloNumero(arrayNumeri[i], li);
    console.log(controlloPariDispari(arrayNumeri[i], li)); //stampo in console il risultato della funzione, la quale a sua volta stampa in console se il numero è pari o dispari
  }
});

//crea una funzione che restituisce true se un numero è pari, false se è dispari.

function controlloPariDispari(numero, li) {
  if (numero % 2 === 0) {
    console.log(li.innerHTML, "pari");
    return true;
  } else {
    console.log(li.innerHTML, "dispari");
    return false;
  }
}
