import { SequenceC } from "./index.js";

test("C contains the elements of A except for the elements of B repeated p times, where p is a prime number", () => {
  expect(
    SequenceC(
      [2, 3, 9, 2, 5, 1, 3, 7, 10],
      [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]
    )
  ).toStrictEqual([2, 9, 2, 5, 7, 10]);
});
