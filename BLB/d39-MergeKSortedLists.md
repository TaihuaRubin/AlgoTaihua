# Im a title

## Topics: Linked List, Divide and Conquer, Heap

---

## Solutions:

// solution 1:

```javascript
const mergeKLists = (lists) => {
  let arr = [];

  //flatten
  function addNode(node) {
    if (node != null) {
      arr.push(node);
      addNode(node.next);
      node.next = null; //prevent leetcode Javascript heap out of memory
    }
  }
  lists.forEach(addNode);

  //sort
  if (arr.length > 1) {
    arr.sort((a, b) => a.val - b.val);
    arr.reduce((a, b) => (a.next = b));
  }

  return arr.length != 0 ? arr[0] : null;
};
```
