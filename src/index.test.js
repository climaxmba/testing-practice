import capitalize from "./index";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("HELLO");
});
