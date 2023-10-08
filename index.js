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

function ceaserCipher(string = "", shift = 1) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const arr = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (alphabets.includes(arr[i])) {
      arr[i] = alphabets[Math.abs((alphabets.indexOf(arr[i]) + shift) % 26)];
    } else if (alphabets.toUpperCase().includes(arr[i])) {
      arr[i] =
        alphabets.toUpperCase()[
          Math.abs((alphabets.toUpperCase().indexOf(arr[i]) + shift) % 26)
        ];
    }
  }
  return arr.join("");
}

export { capitalize, reverseString, calculator, ceaserCipher };
