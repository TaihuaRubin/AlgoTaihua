# Maximum Subarray

## Topics: Array, Divide and conquer, dynamic programming

---

## Solutions:

// solution 1:

```javascript
var maxSubArray = function (nums) {
  // set up a cache array
  let cache = [nums[0]];

  // iterate through the nums array and find the "best summation" of that index, store it in cache
  for (let i = 1; i < nums.length; i++) {
    cache[i] = Math.max(nums[i], cache[i - 1] + nums[i]);
  }
  let max = Math.max(...cache);
  return max;
};
```
