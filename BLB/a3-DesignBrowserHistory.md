# Design Browser History

## Topics: Design

---

## Solutions:

// solution 1: Stacks

```javascript
var BrowserHistory = function (homepage) {
  this.backHistory = [];
  this.forwardHistory = [];
  this.current = homepage;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  // when we visit, we push the current one behind => into the backHistory stack
  this.backHistory.push(this.current);
  this.current = url; // reassign the current
  this.forwardHistory = []; // forward history should be wiped out
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (!this.backHistory.length) return this.current; // if there is no length return current page

  while (steps > 0 && this.backHistory.length) {
    // eles we loop back
    this.forwardHistory.push(this.current);
    this.current = this.backHistory.pop();
    steps--;
  }

  return this.current;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (!this.forwardHistory.length) return this.current;

  while (steps > 0 && this.forwardHistory.length) {
    this.backHistory.push(this.current);
    this.current = this.forwardHistory.pop();
    steps--;
  }

  return this.current;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
```

// solution 2: Linked List

```javascript
var BrowserHistory = function (homepage) {
  this.history = { url: homepage };
};

BrowserHistory.prototype.visit = function (url) {
  this.history.next = { url: url, prev: this.history };
  this.history = this.history.next;
};

BrowserHistory.prototype.back = function (steps) {
  while (steps-- && this.history.prev) this.history = this.history.prev;
  return this.history.url;
};

BrowserHistory.prototype.forward = function (steps) {
  while (steps-- && this.history.next) this.history = this.history.next;
  return this.history.url;
};
```
