import { mergeSort, quickSort } from "./index";

test("mergeSort sorts an unsorted list in place", () => {
  const input = [20, 5, 33, 11, 0, 22, 42, 50, 1];
  const expected = input.slice(0).sort((a, b) => a - b); // make a copy to compare since sort mutates original

  const result = mergeSort(input);
  expect(result).toEqual(expected);
  expect(input).toEqual(expected); // original should be sorted in place
});

test("quickSort sorts an unsorted list in place", () => {
  const input = [20, 5, 33, 11, 0, 22, 42, 50, 1];
  const expected = input.slice(0).sort((a, b) => a - b); // make a copy to compare since sort mutates original

  const result = quickSort(input);
  expect(result).toEqual(expected);
  expect(input).toEqual(expected); // original should be sorted in place
});
