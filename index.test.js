import { capitalize, reverseString, calculator, ceaserCipher, analyzeArray } from "./index";

// capitalize
test("capitalize works", () => {
  expect(capitalize("hello")).toBe("HELLO");
});

// reverseString
test("reverseString works", () => {
  expect(reverseString("Hello world")).toBe("dlrow olleH");
});

// calculator object
test("calculator.multiply works", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});
test("calculator.divide works", () => {
  expect(calculator.divide(100, 4)).toEqual(25);
});
test("calculator.add works", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});
test("calculator.subtract works", () => {
  expect(calculator.subtract(10, 5)).toEqual(5);
});

// caesarCipher
test("ceaserCipher encrypts text", () => {
  expect(ceaserCipher("Hello world", 1)).toBe("Ifmmp xpsme");
});
test("ceaserCipher ignores non-alphabets", () => {
  expect(ceaserCipher("!@#$%^&*()", 1)).toBe("!@#$%^&*()");
});
test("ceaserCipher decrypts text", () => {
  expect(ceaserCipher(ceaserCipher("Hello world", 1), -1)).toBe("Hello world");
  expect(ceaserCipher(ceaserCipher("Hello world", 10), -10)).toBe("Hello world");
});

// analyzeArray
test("analyzeArray works", () => {
  expect(
    analyzeArray(
      [1, 8, 3, 4, 2, 6] ==
        {
          average: 4,
          min: 1,
          max: 8,
          length: 6,
        }
    )
  ).toBe(true);
});