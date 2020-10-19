/** CapitalizeFirst
 *
 *  write a function called capitalizeFist.
 *  Given an array of strings, capitalize the first letter of each string in the array
 */

function capitalizeFirst(array, result = []) {
  if (array.length === 0) return result;

  let first = array[0];
  let firstArr = first.split("");
  firstArr.splice(0, 1, first[0].toUpperCase());
  first = firstArr.join("");
  result.push(first);
  return capitalizeFirst(array.slice(1), result);
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
