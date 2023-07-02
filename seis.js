function translatePigLatin(str) {
  let cadenaArr = str.split("");
  const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  const vocales = ["a", "e", "i", "o", "u"];
  if (vocales.includes(cadenaArr[0])) {
    return str + "way";
  }

  if (consonantes.includes(cadenaArr[0])) {
    for (let i = 0; i < cadenaArr.length; i++) {
      if (vocales.includes(cadenaArr[i]) === true) {
        return rotar(cadenaArr, i);
      }
    }
  }
  return str + "ay";
}

function rotar(cadenaArr, tam) {
  const n = cadenaArr.length;
  for (let i = 0; i < tam; i++) {
    let aux = cadenaArr[0];
    for (let j = 0; j < n - 1; j++) {
      cadenaArr[j] = cadenaArr[j + 1];
    }
    cadenaArr[n - 1] = aux;
  }
  return cadenaArr.join("") + "ay";
}



console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("glove"));
console.log((translatePigLatin("rhythm")));