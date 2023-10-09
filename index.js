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
  // Convert shift to a value within 0-26
  shift = ((shift % 26) + 26) % 26;
  let encryptedStr = "";

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase
      encryptedStr += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase
      encryptedStr += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    } else {
      // Ignore non-alphabets
      encryptedStr += string[i];
    }
  }

  return encryptedStr;
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((prev, curr) => prev + curr) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

export { capitalize, reverseString, calculator, ceaserCipher, analyzeArray };
