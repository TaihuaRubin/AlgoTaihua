# Insert Delete GetRandom O(1)

## Topics: Array, Hash Table, Design

---

## Solutions:

// solution 1:

```javascript
var RandomizedSet = function () {
  this.map = {};
  this.values = [];
};

RandomizedSet.prototype.insert = function (val) {
  if (this.map[val] !== undefined) return false;
  this.map[val] = this.values.length;
  this.values.push(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (this.map[val] === undefined) return false;
  const idx = this.map[val];
  delete this.map[val];
  const last = this.values.pop();
  if (this.values.length === idx) return true;
  this.map[last] = idx;
  this.values[idx] = last;
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  if (this.values.length === 0) return null;
  return this.values[Math.floor(Math.random() * this.values.length)];
};
```

// solution 2:

```javascript
/**
 * Initialize your data structure here.
 */
let RandomizedSet = class {
  constructor() {
    this.set = [];
  }
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.includes(val)) {
    return false;
  } else {
    this.set.push(val);
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const idx = this.set.indexOf(val);

  if (idx === -1) {
    return false;
  }

  this.set.splice(idx, 1);
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (this.set.length === 0) return [];
  // get random idx
  let min = 0;
  let max = this.set.length - 1;
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomIdx = Math.floor(Math.random() * (max - min + 1)) + min;

  return this.set[randomIdx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```
