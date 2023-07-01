function sumFibs(num) {
  let sum = 0;
  let a = -1, b = 1, c = 0;
  for (let i = 1; i <= num + 1; i++) {
    c = a + b;
    if (c % 2 == 1) {
      if (c < num || c === num) {
        sum += c;
      }
    }
    a = b;
    b = c;
  }
  return sum;
}

console.log(sumFibs(10));
console.log(sumFibs(4));
// console.log(sumFibs(4000000));
