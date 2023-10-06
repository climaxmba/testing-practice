function capitalize(str) {
  return str.toUpperCase();
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  multiply: (n1, n2) => n1 * n2,
  divide: (n1, n2) => n1 / n2,
  add: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
};

export { capitalize, reverseString, calculator };
