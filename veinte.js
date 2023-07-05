const Person = function (firstAndLast) {
  let name = firstAndLast;
  this.getFullName = function () {
    return "";
  };
  this.getFirstName = function () {
    const aux = name.split(" ");
    return aux[0];
  };
  this.getLastName = function () {
    const aux = name.split(" ");
    return aux[1];
  };

  this.getFullName = function () {
    return name;
  };
  this.setFirstName = function (first) {
    const aux = name.split(" ");
    let cadena = `${first} ${aux[1]}`;
    name = cadena;
  };

  this.setLastName = function (last) {
    const aux = name.split(" ");
    let cadena = `${aux[0]} ${last}`;
    name = cadena;
  };

  this.setFullName = function (firstAndLast) {
    name = firstAndLast;
  };
  return firstAndLast;
};

const bob = new Person("Bob Ross");
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

console.log(bob.setFirstName("hola"));
console.log(bob.setLastName("Curry"));
