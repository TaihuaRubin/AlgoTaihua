// brute force solution
// approach:
// The easiest way to approach this problem is looping over the given array, fixing an element at position i and looping over it again, from i+1 up to element at N-1 position, adding the fixed element to the current one. If it matches sum returns true. Otherwise, continue the loop up to the end of the array. If there is no match, return false

module.exports = function pairSum(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    const fixed = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const current = arr[j];
      if (fixed + current === sum) {
        return true;
      }
    }
  }
  return false;
};
// performance:
// Time Complexity: O(N^2)
// Space Complexity: O(1)

// optimized solution
// pointers approach
/*
The main hint in the prompt to devise an optimized approach is that the numbers are sorted in ascending order. With that information, it's possible to create two pointers:

One pointing to the element at position 0, that can be called leftPointer
Another one pointing to the element at position N-1, that can be called rightPointer
And using a while loop, it's possible to add the elements in the given array at leftPointer and rightPointer and compare it with sum. Based on the result, the possible outcomes are:

They are equals, function returns true;
The sum of the elements is smaller than sum, leftPointer is increased by one;
The sum of the elements is greater than sum, rightPointer is decreased by one;
The loop should breaks out when leftPointer and rightPointer are equals, meaning all the possible sum for two elements in the array were evaluated. At this point, function can return false.

 */

// module.exports = function pairSum(arr, sum) {
//   let leftPointer = 0
//   let rightPointer = arr.length - 1
//   while (leftPointer < rightPointer) {
//     const currentSum = arr[leftPointer] + arr[rightPointer]
//     if (currentSum === sum) {
//       return true
//     } else if (currentSum < sum) {
//       leftPointer++
//     } else {
//       rightPointer--
//     }
//   }
//   return false
// }
// Time Complexity: O(N)
// Space Complexity: O(1)
