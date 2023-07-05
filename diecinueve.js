function addTogether() {
  const aux = Object.values(arguments).slice(0);
  let sum = 0;
  if (aux.length === 1) {
    if (typeof aux[0] === "string" || typeof aux[0] === "undefined")
      return undefined;
    return closuere(aux[0]);
  }

  for (let i = 0; i < aux.length; i++) {
    if (
      typeof aux[i] !== "string" &&
      typeof aux[i] !== "undefined" &&
      typeof aux[i] !== "object"
    ) {
      sum += aux[i];
    } else {
      return undefined;
    }
  }
  return sum;
}

function closuere(n) {
  return function (num) {
    if (typeof num !== "object") return n + num;
    return undefined;
  };
}

console.log(addTogether(5));
console.log(addTogether(2, 3));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));
