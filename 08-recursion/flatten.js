/** Flatten
 * write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened
 */

function flatten(array, result = []) {
  // base case?
  if (array.length === 0) return result;

  if (Array.isArray(array[0]) === false) {
    result.push(array[0]);
    return flatten(array.slice(1), result);
  } else {
    result = flatten(array[0], result);
    return flatten(array.slice(1), result);
  }

  // check every index, if current index is an array, calls flatten(array[index])
  // else, push everything into an array?
}
console.log(flatten([1, [2, [3, 4], [[5]]]]));

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// solution 2
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
