# Word Search

## Topics: backtracking, dfs

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dfs = (board, i, j, remain) => {
  if (remain.length === 0) return true;
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
  if (board[i][j] !== remain[0]) return false;

  let char = board[i][j];
  board[i][j] = "-";
  let result =
    dfs(board, i + 1, j, remain.substring(1)) ||
    dfs(board, i - 1, j, remain.substring(1)) ||
    dfs(board, i, j + 1, remain.substring(1)) ||
    dfs(board, i, j - 1, remain.substring(1));
  board[i][j] = char;
  return result;
};

var exist = function (board, word) {
  if (board.length === 0 || word.length === 0) return false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, i, j, word)) return true;
    }
  }
  return false;
};
```

// solution2:

```javascript

Time O(mn * 4^l), l = word.length
Space O(mn + l)

const exist = (board, word) => {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const go = (x, y, k) => {
    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[x][y] = '*'; // mark as visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (go(i, j, k + 1)) return true;
      }
    }
    board[x][y] = word[k]; // reset
    return false;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }

  return false;
};
```
