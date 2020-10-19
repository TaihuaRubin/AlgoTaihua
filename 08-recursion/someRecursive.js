/** Some Recursive
 *
 * wirte a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback otherwise it returns false
 */

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, func) {
  // base case?
  if (array.length === 0) return false;
  if (func(array[0]) === true) return true;

  return someRecursive(array.slice(1), func);
}
