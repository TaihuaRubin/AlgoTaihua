// Brute Force Solution**: O(n^3) time complexity, O(n) space complexity

module.exports = arrayThreeSum = (arr, targetSum) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let currSum = arr[i] + arr[j] + arr[k];

        if (currSum === targetSum) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result;
};

/*
// Optimized Solution 1**: O(n^2) time complexity, O(1) space complexity
module.exports =  arrayThreeSum = (arr, targetSum) => {
  //sorts the input arr from least to greatest
  arr.sort((a, b) => a - b);
  const solution = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let element = arr[i];
    let leftIndex = i + 1;
    let rightIndex = arr.length - 1;

    //for each element in the array check to see if any two other integers in the array add to the target sum
    while (leftIndex < rightIndex) {
      let currentSum = element + arr[leftIndex] + arr[rightIndex];

      //if the currentSum is equal to the target sum add an array of those 3 integers to the solution array
      if (currentSum === targetSum) {
        solution.push([element, arr[leftIndex], arr[rightIndex]]);
        leftIndex++;
        rightIndex--;
      } else if (currentSum > targetSum) {
        rightIndex--;
      } else {
        leftIndex++;
      }
    }
  }
  return solution;
}
*/

/*
// Optimized Solution 2**: O(n^2) time complexity, O(n) space complexity
// Note that this solution does not return a sorted solution like Solution 1
module.exports = arrayThreeSum = (arr, targetSum) => {
  const solution = [];
  for (let i = 0; i < arr.length - 1; i++) {
    //the sum needed given we already know one element arr[i]
    let currentSum = targetSum - arr[i];
    //create a hash table to store all of the integers from arr[i] we have tried
    let memo = {};
    for (let j = i + 1; j < arr.length; j++) {
      if (memo[currentSum - arr[j]]) {
        solution.push([arr[i], currentSum - arr[j], arr[j]]);
      } else {
        memo[arr[j]] = true;
      }
    }
  }
  return solution;
};
*/
