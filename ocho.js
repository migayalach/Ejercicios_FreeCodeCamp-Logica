function pairElement(str) {
  const array = str.split("");
  const aux = [];
  let extra;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "A":
        extra = ["A", "T"];
        break;
      case "T":
        extra = ["T", "A"];
        break;
      case "C":
        extra = ["C", "G"];
        break;
      case "G":
        extra = ["G", "C"];
        break;
      default:
        break;
    }
    aux.push(extra);
  }
  return aux;
}

// console.log(pairElement("GCG"));
// console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
// console.log(pairElement("CTCTA"));
