import { mergeSort } from "./index";

test("mergeSort sorts an unsorted list in place", () => {
  const input = [20, 5, 33, 11, 0, 22, 42, 50, 1];
  const expected = input.slice(0).sort((a, b) => a - b);

  const result = mergeSort(input);
  expect(result).toEqual(expected);
});
