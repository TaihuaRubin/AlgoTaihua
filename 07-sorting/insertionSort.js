/**
 * Insertion Sort
 *
 * Similar to bubble and selection sort
 *
 * builds up the sort by gradually creating a larger left half -> the left is always sorted
 */

/** pseudocode
 *
 * 1. start by picking the second element in the array;
 * 2. compare the second with the one before it and swap if necessary
 * 3. continue to the next element and if it is in the incorrect order, iterate through the sorted portion (the left side) to place the element in the correct place
 * 4. repeat until the array is sorted
 */

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];

    // then work backwords (easier to swap one by one)
    for (let j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
      array[j] = currentVal;
    }
  }

  return array;
};

console.log(insertionSort([1, 2, 10, 3, 2, 5, 9, 8, 7]));

/** Time complexity : O(N^2) */
