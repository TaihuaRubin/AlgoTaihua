# Top K frequent Elements

## Topics: Hash Table, Heap

---

## Solutions:

// solution 1: hash

```javascript
const topKFrequent = (nums, k) => {
  const map = {};
  for (const n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
  }

  const arr = [];
  for (const n in map) {
    arr.push({ n, count: map[n] });
  }

  return arr
    .sort((a, b) => b.count - a.count)
    .slice(0, k)
    .map((a) => Number(a.n));
};
```

// solution 2: hash map

```javascript
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let v of nums) {
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      map.set(v, map.get(v) + 1);
    }
  }

  let array = [];
  for (let [key, value] of map) {
    array.push([key, value]);
  }
  array.sort(function (a, b) {
    return b[1] - a[1];
  });
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(array[i][0]);
  }
  return result;
};
```
