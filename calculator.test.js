import { calculator } from ".";

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
