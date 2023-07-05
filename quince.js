function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let boolean = func(arr[i]);
    if (boolean) return clonar(i, arr);
  }
  return [];
}

function clonar(index, arr) {
  let aux = [];
  for (let i = index; i < arr.length; i++) {
    aux.push(arr[i]);
  }
  return aux;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);
