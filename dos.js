function busqueda(arr1, arr2) {
  let array = [];
  let sw = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      let aux = arr1[i];
      array.push(aux);
      sw = 0;
    } else {
      sw = 1;
    }
  }

  if (sw === 0) {
    array = [...arr1, ...arr2];
  }

  return array;
}

function searchIgual(arr1, arr2) {
  const aux = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      aux.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      aux.push(arr2[i]);
    }
  }
  return aux;
}

function diffArray(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  if (arr1.length < arr2.length) return busqueda(arr2, arr1);
  if (arr1.length === arr2.length) return searchIgual(arr1, arr2);
  return busqueda(arr1, arr2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(
  diffArray([], ["snuffleupagus", "cookie monster", "elmo"])
);
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
