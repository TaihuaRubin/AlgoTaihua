# Vertical Order Traversal of a Binary Tree

## Topics: Hash Table, Tree

---

## Solutions:

// solution 1:

```javascript
/*
My intuition for this problem was to use inOrderTraversal because this will allow us to visit the leftmost (vertically speaking) node first. This way the nodes are mostly already sorted by x-coordinates. I thought that since JavaScript uses quick sort for its sorting algorithm, which tends vary in speed from best to worst case, it will be an overall improvement. I might be totally off. Please let me know what you guys think. Thank you.
*/

var verticalTraversal = function (root) {
  const nodeInfos = []; // holds the x, y, & val information of each node traversed

  getNodeInfos(root, 0, 0);

  // sort by the following order of importance:
  //  1. x - coordinate
  //  2. y - coordinate precedence given to higher value
  //  3. node val in ascending order

  nodeInfos.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);

  const map = new Map();

  for (const [x, y, val] of nodeInfos) {
    if (!map.has(x)) map.set(x, []);
    map.get(x).push(val);
  }

  return [...map.values()];

  function getNodeInfos(node, x, y) {
    if (node) {
      getNodeInfos(node.left, x - 1, y - 1); // traverse left
      nodeInfos.push([x, y, node.val]);
      getNodeInfos(node.right, x + 1, y - 1); // traverse right
    }
  }
};
```

// Solution 2 : Breadth-first Search

```javascript
var verticalTraversal = function (root) {
  if (root == null) {
    return [];
  }

  const queue = [];

  queue.push([root, 0, 0]);
  const list = [];
  while (queue.length > 0) {
    const [node, row, column] = queue.shift();

    if (node) {
      queue.push([node.left, row + 1, column - 1]);
      queue.push([node.right, row + 1, column + 1]);
      list.push([node.val, row, column]);
    }
  }

  const compare = (a, b) => {
    if (a[2] - b[2] === 0) {
      if (a[1] - b[1] === 0) {
        return a[0] - b[0];
      }
    }

    return a[2] - b[2];
  };

  list.sort(compare);

  const map = new Map();
  for (let i = 0; i < list.length; i++) {
    const [value, row, column] = list[i];

    if (map.has(column)) {
      map.get(column).push(value);
    } else {
      map.set(column, [value]);
    }
  }

  return [...map.values()];
};
```
