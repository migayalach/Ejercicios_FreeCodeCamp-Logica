function destroyer(arr) {
  let j = 0, n, x;
  const valsToRemove = Object.values(arguments).slice(1);
  const aux = [];
  n = arr.length;
  for (let i = 0; i < valsToRemove.length; i++) {
    while (j < n) {
      if (valsToRemove[i] === arr[j]) {
        for (x = j; x < n; x++) {
          arr[x] = arr[x + 1];
        }
        n--;
      } else {
        j++;
      }
    }
    j = 0;
  }
  n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i]) {
      aux.push(arr[i]);
    }
  }
  return aux;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
