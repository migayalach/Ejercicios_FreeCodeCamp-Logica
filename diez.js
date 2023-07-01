function uniteUnique(arr) {
  const aux = Object.values(arguments).slice(1);
  const newArr = eliminarRepetido(arr);
  return coincidencias(aux, newArr);
}

function eliminarRepetido(arr) {
  const newArr = [];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        for (let k = j; k < n - 1; k++) {
          arr[k] = arr[k + 1];
        }
        n--;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

function coincidencias(aux, newArr) {
  for (let i = 0; i < aux.length; i++) {
    let n = aux[i].length;
    for (let j = 0; j < n; j++) {
      if (newArr.indexOf(aux[i][j]) === -1) {
        newArr.push(aux[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2, 3, 4], [5, 2, 1, 4], [2, 1]));
