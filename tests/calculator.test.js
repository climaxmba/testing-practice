import { calculator } from "..";

test("Can multiply, divide, add and subtract", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
  expect(calculator.divide(100, 4)).toEqual(25);
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.subtract(10, 5)).toEqual(5);
});
