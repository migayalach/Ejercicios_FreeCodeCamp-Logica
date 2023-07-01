function sumPrimes(num) {
  let sum = 0, response = 0;
  for (let i = 1; i <= num; i++) {
    response = primo(i);
    if (response === 1) {
      sum += i;
    }
  }
  return sum;
}

function primo(num) {
  let p = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      p++;
    }
  }
  if (p === 2) {
    return 1;
  }
  return 0;
}

sumPrimes(10);