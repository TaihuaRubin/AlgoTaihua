# Longest Consecutive Sequence

## Topics: Array, Union Find

---

## Solutions:

// solution 1:

```javascript
var longestConsecutive = function (nums) {
  let numsSet = new Set(nums),
    maxConsecutive = -Infinity;
  numsSet.forEach((n) => {
    if (numsSet.has(n - 1)) {
      return;
    }

    let currConse = 0,
      currNum = n;
    while (numsSet.has(currNum)) {
      currConse++;
      currNum++;
    }
    maxConsecutive = Math.max(maxConsecutive, currConse);
  });
  return maxConsecutive === -Infinity ? 0 : maxConsecutive;
};
```
