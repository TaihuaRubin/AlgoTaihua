# Number Of Islands

## Topics: Depth-first search, breadth-first search, union find

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */

var islandCheck = (matrix, row, col) => {
  // check neighbor
  // top = [row-1][col]
  // right = [row][col+1]
  // left = [row][col-1];
  // bottom = [row+1][col];

  // check if they exist =>  if so => check if they're 1
  // if so mark them to 2
  // matrix = islandCheck(matrix, that cell)

  matrix[row][col] = "2";
  if (row - 1 >= 0) {
    if (matrix[row - 1][col] === "1") {
      matrix[row - 1][col] = "2";
      matrix = islandCheck(matrix, row - 1, col);
    }
  }

  if (col + 1 < matrix[0].length) {
    if (matrix[row][col + 1] === "1") {
      matrix[row][col + 1] = "2";
      matrix = islandCheck(matrix, row, col + 1);
    }
  }

  if (col - 1 >= 0) {
    if (matrix[row][col - 1] === "1") {
      matrix[row][col - 1] = "2";
      matrix = islandCheck(matrix, row, col - 1);
    }
  }

  if (row + 1 < matrix.length) {
    if (matrix[row + 1][col] === "1") {
      matrix[row + 1][col] = "2";
      matrix = islandCheck(matrix, row + 1, col);
    }
  }

  return matrix;
};

var numIslands = function (grid) {
  //depth first search
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] === "2";
        islandCount++;
        grid = islandCheck(grid, i, j);
      }
    }
  }

  return islandCount;
};
```
