// VOLVER ARRAY                         OK
// MANDAR LA POSICION A BINARIO()       OK
// BUSCAR EN EL CODIGO ASCII EL VALOR   OK
// CONTATENAR EN LA NUEVA CADENA        OK
function binaryAgent(str) {
  let cadena = "";
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let res = binarioDecimal(arr[i]);
    cadena += String.fromCharCode(res);
  }
  return cadena;
}

function binarioDecimal(arr) {
  let num = 0, p = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "1") {
      num += p;
    }
    p *= 2;
  }
  return num;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

console.log(
  binaryAgent(
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
  )
);
