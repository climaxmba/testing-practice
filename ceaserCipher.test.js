import { ceaserCipher } from ".";

test("ceaserCipher encrypts text", () => {
  expect(ceaserCipher("Hello world", 1)).toBe("Ifmmp xpsme");
});
test("ceaserCipher ignores non-alphabets", () => {
  expect(ceaserCipher("!@#$%^&*()", 1)).toBe("!@#$%^&*()");
});
test("ceaserCipher decrypts text", () => {
  expect(ceaserCipher(ceaserCipher("Hello world", 1), -1)).toBe("Hello world");
  expect(ceaserCipher(ceaserCipher("Hello world", 10), -10)).toBe(
    "Hello world"
  );
});
