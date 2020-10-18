/**
 * Merge Sort
 *
 * created in 1948, by Johnathan Von Neumann
 * (23 pages of code with a big computer called Ed Vak )
 *
 *
 * 1. combination of "merging" & "sorting"
 * 2. Exploits the fact that arrays of 0 or 1 elements are always sorted
 * 3. Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (Divide and Conquere )
 */

/*************************** */

/** Merging Array Function
 *
 * 1. in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
 * 2. given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
 * 3. This function should run in O(n+m) time and O(n+m)space and should not modify the parameters passed to it. (visit each item of each array once)
 *
 ****** Pseudocode ******
 * 1. create an empty array, take a look at the smallest values in each input array (two counters)
 * 2. while there are still values we havent looked at
 *     -> if the value in the firt array is smaller than the value in the second array, push the value in the first array into out results and move on to the next value in the first
 *     -> if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
 *     -> Once we exhaust one array, push in all remaining values from the other array
 *
 * merge([1,10,50], [2, 14, 99, 100])
 */

function merge(array1, array2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    } else {
      // this would also cover the case when j and i are the equal
      results.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }

  return results;
}

/** MergeSort
 *
 * 1. breaking up the array into halves until you have arrays that are empty or have one element
 * 2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until youre back at the full length of the array.
 * 3. Once the array has been merged back together, return the merged (and sorted!) array.
 */

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // split to halves recursively
  // if the length isnt 1 or 0
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
