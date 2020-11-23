# Next Permutation

## Topics: Stacks

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // any given sequence that is in descending order, no next larger permutation is possible

  // find the first pair of two successive numbers nums[i] and nums[i-1], from the right, which satisfy nums[i] > nums[i-1]
  let firstNumberdescending = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      firstNumberdescending = i;
      break;
    }
  }
  // no rearrangements to the right of {firstNumberdescending - 1} can create a larger permutation since that subarray consists of numbers in descending order
  // need to replace the number nums[firstNumberdescending-1] with the number which is just larger than itself among the numbers lying to its right section
  if (firstNumberdescending >= 0) {
    let justLargerThanNumber = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > nums[firstNumberdescending]) {
        justLargerThanNumber = i;
        break;
      }
    }
    // we know that justLargerThanNumber has to be  >= 1;
    swap(nums, firstNumberdescending, justLargerThanNumber);
  }
  // since nums are still in descending ordering to the right of nums[firstNumberdescending-1] even after swap
  // we want to reverse the numbers to the right of nums[firstNumberdescending-1] to get the smallest permutation
  reverse(nums, firstNumberdescending + 1);
  return nums;
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
```
