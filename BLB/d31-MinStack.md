# Min Stack

## Topics: Stacks, Design

---

## Solutions:

// solution 1:

```javascript
var MinStack = function () {
  this.minStack = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */

MinStack.prototype.push = function (x) {
  if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x);
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const popped = this.stack.pop();
  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
```
