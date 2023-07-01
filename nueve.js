function fearNotLetter(str) {
  const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const aux = str.split("");
  const primeraLetra = aux[0];
  const inicio = abc.indexOf(primeraLetra);
  let final = str.length + inicio;
  let sw = 0;
  let c = 0;
  let cadena = "";
  for (let i = inicio; i <= final; i++) {
    if (aux[c] === abc[i]) {
      c++;
    } else {
      sw = 1;
      cadena = abc[i];
    }
  }
  if (sw === 1) {
    return cadena;
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("stvwx"));