# Zuma Game

## Topics: Depth-first Search

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
function dfs(board, hand) {
  let res = Infinity;

  if (board.length === 0) return 0;

  for (let i = 0; i < board.length; i++) {
    const ch = board[i],
      start = i;
    while (board[i + 1] === ch) i++;

    const need = Math.max(0, 3 - (i - start + 1));
    if ((hand[ch] || 0) < need) continue;

    hand[ch] = (hand[ch] || 0) - need;
    const removed = board.slice(0, start) + board.slice(i + 1);
    res = Math.min(res, dfs(removed, hand) + need);
    hand[ch] += need;
  }

  return res;
}

var findMinStep = function (board, hand) {
  hand = hand.split("").reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), {});
  const res = dfs(board, hand);
  return isFinite(res) ? res : -1;
};
```
