import { analyzeArray } from ".";

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
