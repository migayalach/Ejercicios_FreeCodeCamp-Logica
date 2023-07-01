function myReplace(str, before, after) {
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === before) {
      let aux = convertir(before, after);
      array[i] = aux;
    }
  }
  return array.join(" ");
}

function convertir(before, after) {
  let aux = "";
  let reject = /[A-Z]/;
  let n = after.length;
  let letra = after.slice(1, n);
  if (before[0].match(reject)) {
    aux = after[0].toUpperCase();
    aux = aux + letra;
  } else {
    aux = after.toLowerCase();
  }
  return aux;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
