# Minimum Number of Steps to Make Two Strings Anagram

## Topics: String

---

## Solutions:

// solution 1:

```javascript
let minSteps = function (s, t) {
  let balanceMap = {},
    result = 0;
  for (let i = 0; i < s.length; i++) {
    let currentS = s[i],
      currentT = t[i];
    balanceMap[currentS] ? balanceMap[currentS]++ : (balanceMap[currentS] = 1);
    balanceMap[currentT] ? balanceMap[currentT]-- : (balanceMap[currentT] = -1);
  }
  for (let k of Object.values(balanceMap)) {
    result += Math.abs(k);
  }
  return result / 2;
};
```
