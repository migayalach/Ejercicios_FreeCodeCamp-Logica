function spinalCase(str) {
  const x = str.split("");
  let cadena = "", sw = 0;
  let aux = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i].match(/[A-Z]/)) {
      cadena = convertir(x[i], (sw = 1));
    } else {
      cadena = convertir(x[i], (sw = 0));
    }
    aux = aux + cadena;
    sw = 0;
  }
  aux = aux.toLowerCase();
  return verificar(aux);
}

function convertir(str, sw) {
  let newCadena = "";
  if (sw === 0) {
    newCadena = str + newCadena;
  } else {
    newCadena = str + newCadena;
    newCadena = "-" + newCadena;
  }
  return newCadena;
}

function verificar(str) {
  let arr = [];
  let cadena = "";
  arr = str.split(/[ |_|-]/);
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]){
      if (i < arr.length - 1) {
        cadena = cadena + arr[i];
        cadena = cadena + "-";
      } else {
        cadena = cadena + arr[i];
      }
    }
  }
  return cadena;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
