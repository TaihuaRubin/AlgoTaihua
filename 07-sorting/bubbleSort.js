/**Bubble Sort
 * Pseudocode
 *
 * 1. start looping from with a variable called i then end of the array towards the beginning
 * 2. start an inner loop with a variable called j from the beginning until i-1
 * 3. if array[j] is greater than array[j+1], swap them
 */

// if we're arranging nums in an accending way, the largest will always "bubble up" to the end
// and then we start from the beginning until end-1
// until it's all done

const bubbleSort = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort([1, 3, 2, 1, 5, 4, 3]));

/** Optimization:
 *
 * when we go through each round,
 * we can check if we swapped last round, if we didnt, it means we're aldone
 * we dont have to keep looping through an already sorted array

 */

const optimizedBubbleSort = (array) => {
  let noSwap;
  for (let i = array.length - 1; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        // swap here
        console.log("swapping");
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        noSwap = false;
      }
    }
    // if we didnt swap at the last round, we dont need to keep going
    if (noSwap === true) break;
  }
  return array;
};

console.log(optimizedBubbleSort([1, 2, 3, 4, 7, 6, 5]));

/** time complexity: worst -> O(N^2)  best when an array is almost all sorted-> O(N) */
