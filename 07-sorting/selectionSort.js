/** Selection Sort
 *
 * Just about the opposite of bubble sort,
 * it grabs the first index, and make that the temporary minimum,
 * loop through the entire array and find the "true min"
 * swap the tru min with the first,
 * then move on to the next index
 *
 */

/**
 * Psuedocode
 *
 * 1. set up a temp min variable to store the smallest value we have seen so far (in current round)
 * 2. compare min to the next item in the array until you find a smaller number
 * 3. if a smaller number is found, reassign the smaller number to the "min" variable, continue until the end
 * 4. if min is not the value (first idx) we begin with, swap
 */

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
    }
  }
  return array;
};

console.log(selectionSort([1, 3, 2, 1, 5, 4, 3]));

/**
 * Time complexity
 * worst: O(N^2)
 */
