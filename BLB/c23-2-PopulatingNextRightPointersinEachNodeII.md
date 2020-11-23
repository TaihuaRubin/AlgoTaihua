# Populating Next Right Pointers in Each Node II

## Topics: Tree, Depth-first Search

---

## Solutions:

// solution 1: Queue, BFS

```javascript
var connect = function (root) {
  const queue = [root];
  let tail = root;
  // BFS
  while (queue.length) {
    const curr = queue.shift();
    if (!curr) break;
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
    if (curr === tail) {
      curr.next = null;
      tail = queue.length > 0 ? queue[queue.length - 1] : null;
    } else {
      curr.next = queue[0];
    }
  }
  return root;
};
```
