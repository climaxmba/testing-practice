import { ceaserCipher } from ".";

test("Encrypts text", () => {
  expect(ceaserCipher("Hello world", 1)).toBe("Ifmmp xpsme");
});

test("Decrypts text", () => {
  expect(ceaserCipher(ceaserCipher("Hello world", 1), -1)).toBe("Hello world");
  expect(ceaserCipher(ceaserCipher("Hello world", 10), -10)).toBe(
    "Hello world"
  );
});

test("Ignores non-alphabets", () => {
  expect(ceaserCipher("!@#$%^&*()", 1)).toBe("!@#$%^&*()");
});
