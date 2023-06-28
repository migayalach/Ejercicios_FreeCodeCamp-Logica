function serie(arr) {
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

function sumAll(arr) {
  let aux = 0;
  if (arr[0] < arr[1]) return serie(arr);
  aux = arr[0];
  arr[0] = arr[1];
  arr[1] = aux;
  return serie(arr);
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);