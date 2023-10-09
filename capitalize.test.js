import { capitalize } from ".";

test("Capitalizes text", () => {
  expect(capitalize("hello")).toBe("HELLO");
  expect(capitalize("wORld")).toBe("WORLD");
});

test("Ignores non-alphabets", () => {
  expect(capitalize("!@#$%^&*()")).toBe("!@#$%^&*()");
});
