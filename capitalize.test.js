import { capitalize } from ".";

test("capitalize works", () => {
  expect(capitalize("hello")).toBe("HELLO");
});
