export function mergeSort(array: number[]) {
  innerMergeSort(array, [], 0, array.length - 1);
  function innerMergeSort(
    array: number[],
    helper: number[],
    low: number,
    high: number
  ) {
    if (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      innerMergeSort(array, helper, low, mid);
      innerMergeSort(array, helper, mid + 1, high);
      merge(array, helper, low, mid, high);
    }
  }

  function merge(
    array: number[],
    helper: number[],
    low: number,
    mid: number,
    high: number
  ) {
    let i = low;
    while (i <= high) {
      helper[i] = array[i];
      i++;
    }

    let left = low;
    let right = mid + 1;
    let current = low;

    while (left <= mid && right <= high) {
      // left element is smaller
      if (helper[left] <= helper[right]) {
        array[current] = helper[left];
        left++;
      } else {
        // right is smaller
        array[current] = helper[right];
        right++;
      }
      current++;
    }

    let j = 0;
    while (j <= mid - left) {
      array[current + j] = helper[left + j];
      j++;
    }
  }
  return array;
}
