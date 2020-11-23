# Design a leaderboard

## Topics: Hash Table, Sort, Design

---

## Solutions:

// solution 1:

```javascript
var Leaderboard = function () {
  this.board = {};
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  this.board[playerId] = (this.board[playerId] || 0) + score;
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  let scores = Object.values(this.board);
  scores.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += scores[i];
  }
  return sum;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.board[playerId] = 0;
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
```

// solution 2: Hash map & Linked List

```javascript
function Node(value, previous, next) {
  (this.value = value || null), (this.previous = previous || null), (this.next = next || null);
}

var Leaderboard = function () {
  this.board = {};

  // Implement double linked list representing the top and bottom of the rank leaderboard
  this.rankTop = new Node();
  this.rankBottom = new Node();
  this.rankTop.next = this.rankBottom;
  this.rankBottom.previous = this.rankTop;
};

Leaderboard.prototype.addScore = function (playerId, score) {
  // If the player is new, add to the sorted doubly linked list
  if (this.board[playerId] === undefined) {
    let node = new Node(score);
    this.board[playerId] = node;
    let pointer = this.rankBottom;
    while (pointer.previous && score > pointer.value) pointer = pointer.previous;
    let head = pointer;
    let tail = pointer.next;
    head.next = node;
    node.previous = head;
    node.next = tail;
    tail.previous = node;
  } else {
    // Player already exists, so remove the player node from ranking list, update its score, and re-rank it on the list
    let node = this.board[playerId];
    node.value += score;
    let head = node.previous;
    let tail = node.next;
    head.next = tail;
    tail.previous = head;
    let pointer = tail;
    while (pointer.previous && node.value > pointer.value) pointer = pointer.previous;
    let front = pointer;
    let back = pointer.next;
    front.next = node;
    node.previous = front;
    node.next = back;
    back.previous = node;
  }
};

Leaderboard.prototype.top = function (K) {
  // Traverse the top K nodes from the top of the sorted doubly linked list and sum them
  let sum = 0;
  let pointer = this.rankTop.next;
  while (K && pointer.next) {
    sum += pointer.value;
    pointer = pointer.next;
    K--;
  }
  return sum;
};

Leaderboard.prototype.reset = function (playerId) {
  // Remove the node from the hashmap and linked list
  let node = this.board[playerId];
  let head = node.previous;
  let tail = node.next;
  head.next = tail;
  tail.previous = head;
  delete this.board[playerId];
};
```
