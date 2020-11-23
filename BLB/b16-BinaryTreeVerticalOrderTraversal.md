# Binary Tree Vertical Order Traversal

## Topics: Depth-first search, Breadth-first Search

---

## Solutions:

// solution1: BFS

```javascript
var verticalOrder = function (root) {
  const queue = [[root, 0]];
  const nodesByColumn = {};

  while (queue.length > 0) {
    const [node, column] = queue.shift();

    if (node === null) continue;

    if (nodesByColumn[column] === undefined) nodesByColumn[column] = [];
    nodesByColumn[column].push(node.val);

    queue.push([node.left, column - 1]);
    queue.push([node.right, column + 1]);
  }

  const orderedColumns = Object.keys(nodesByColumn).sort((a, b) => a - b);

  return orderedColumns.map((columnKey) => {
    return nodesByColumn[columnKey];
  });
};
```

// solution 2:

```javascript
/**
I did not have much time to optimize it. Was solving this within limited time frame.

Runtime: 60 ms, faster than 76.47% of JavaScript online submissions for Binary Tree Vertical Order Traversal.
Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Binary Tree Vertical Order Traversal.
*/
function verticalOrder(root) {
  let minOffset = Infinity;
  let maxOffset = -Infinity;

  const offsetMap = new Map();
  const depthMap = new Map();

  let ret = [];
  dfs(root, 0, 0);
  for (let i = minOffset; i <= maxOffset; ++i) {
    const nodeArr = offsetMap.get(i);
    const valArr = [];
    for (let i = 0; i < nodeArr.length; ++i) {
      valArr.push(nodeArr[i].val);
    }
    ret.push(valArr);
  }
  return ret;

  function dfs(node, offset, depth) {
    if (!node) {
      return;
    }

    depthMap.set(node, depth);

    minOffset = Math.min(offset, minOffset);
    maxOffset = Math.max(offset, maxOffset);

    const arr = offsetMap.get(offset) || [];
    const index = arr.findIndex((item) => depthMap.get(item) > depth);
    if (index >= 0) {
      arr.splice(index, 0, node);
    } else {
      arr.push(node);
    }
    offsetMap.set(offset, arr);

    dfs(node.left, offset - 1, depth + 1);
    dfs(node.right, offset + 1, depth + 1);
  }
}
```
