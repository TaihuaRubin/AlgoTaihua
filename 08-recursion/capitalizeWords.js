/** capitalizeWords
 *
 *  given an array of words, return a new array containing each word capitalized
 */

const capitalizeWords = (array, result = []) => {
  if (array.length === 0) return result;

  result.push(array[0].toUpperCase());
  return capitalizeWords(array.slice(1), result);
};
