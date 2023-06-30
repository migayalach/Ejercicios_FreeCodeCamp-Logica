function whatIsInAName(collection, source) {
  let n, c = 0;
  const aux = [], array = [];

  for (let i in source) {
    aux.push(i);
  }

  n = aux.length;

  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < n; j++) {
      if (collection[i].hasOwnProperty(aux[j])) {
        if (collection[i][aux[j]] === source[aux[j]]) {
          c++;
        }
      }
    }
    if (c === n) {
      array.push(collection[i]);
    }
    c = 0;
  }
  console.log(array);
  return array;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 })
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

console.log(
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
);
// Obj = { array: [], clave: { 0: "x", 1: "y", 1: "z", 2: 2357, 3: ":D" } };
