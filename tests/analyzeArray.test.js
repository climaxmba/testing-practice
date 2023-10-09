import { analyzeArray } from "..";
import isEqual from "lodash.isequal";

test("Gives accurate array analysis", () => {
  expect(
    isEqual(analyzeArray([1, 8, 3, 4, 2, 6]), {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
  ).toBe(true);

  expect(
    isEqual(analyzeArray([0, 4, 2, 10]), {
      average: 4,
      min: 0,
      max: 10,
      length: 4,
    })
  ).toBe(true);
});
