# Candy Crush

## Topics: Array, Two Pointers

---

## Solutions:

// solution 1:

```javascript
/*
mark - calls markIfCrushable on every element, and If the element is crushable (if all the neighbors absolute value is equal to current element) then the element is set to a negative value. This happens in place.

crush - Iterates vertically through the board, pushing elements > 0 into a stack, then writes elements to the end of the current column by popping off of the stack. When the stack is empty 0s are written until the top of the column is reached.

isStable - returns early with false if an element < 0 is found - true otherwise.

*/

var candyCrush = function (board) {
  mark(board);
  while (!isStable(board)) {
    crush(board);
    mark(board);
  }
  return board;
};

function mark(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // check vertically
      let fixed = Math.abs(board[row][col]); // the candy to be matched with
      if (
        board[row + 1] && // if bottom exist
        Math.abs(board[row + 1][col]) === fixed && // and matches
        board[row - 1] && // if top exist
        Math.abs(board[row - 1][col]) === fixed
      ) {
        // and it matches

        // mark everything their negative val
        board[row - 1][col] = -Math.abs(board[row - 1][col]);
        board[row][col] = -Math.abs(board[row][col]);
        board[row + 1][col] = -Math.abs(board[row + 1][col]);
      }

      // check horizontally
      if (Math.abs(board[row][col + 1]) === fixed && Math.abs(board[row][col - 1]) === fixed) {
        board[row][col + 1] = -Math.abs(board[row][col + 1]);
        board[row][col] = -Math.abs(board[row][col]);
        board[row][col - 1] = -Math.abs(board[row][col - 1]);
      }
    }
  }
}

function isStable(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] < 0) return false;
    }
  }
  return true;
}

function crush(board) {
  for (let col = 0; col < board[0].length; col++) {
    let stack = []; // using a stack to store the positive candies (so that we can sink down)
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] > 0) {
        stack.push(board[row][col]);
      }
    }
    let bottomInd = board.length - 1;
    // re-assign candies from bottom up
    while (stack.length) {
      board[bottomInd][col] = stack.pop(); // as long as there are still positive candies in the stack
      bottomInd--;
    }
    while (bottomInd >= 0) {
      // when stack is empty, re-assign those to 0
      board[bottomInd][col] = 0;
      bottomInd--;
    }
  }
}
```
