# merge Intervals

## Topics: Array, Sort

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  //  start at idex1
  // compare intervals[idx-1][1] & intervals[idx][0]

  intervals.sort((a, b) => a[0] - b[0]);

  let idx = 1;

  while (idx < intervals.length) {
    let prev = intervals[idx - 1];
    let curr = intervals[idx];

    if (prev[1] >= curr[0]) {
      // check if curr[1]> prev[1]
      //intervals[i] = [Math.min(prev[0],curr[0]), Math.max(prev[1],curr[1])]
      // intervals.splice(i-1,1);
      //       i -= 1  // After merge, the arr become shorter

      intervals[idx] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
      intervals.splice(idx - 1, 1); // take one before out
      idx--;
    }

    idx++;
  }

  return intervals;
};
```
