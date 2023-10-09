import { reverseString } from "..";

test("Reverses string", () => {
  expect(reverseString("Hello world")).toBe("dlrow olleH");
  expect(reverseString(reverseString("Hello world"))).toBe("Hello world");
});
