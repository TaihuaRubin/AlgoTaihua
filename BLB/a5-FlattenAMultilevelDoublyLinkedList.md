# Flatten a Multilevel Doubly Linked List

## Topics: Linked List, Depth-first Search

---

## Solutions:

// solution 1:

```javascript
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var flatten = (head) => {
  if (!head) return;

  let stack = [head];
  let nodeHead = null;

  while (stack.length) {
    let node = stack.pop();

    if (!nodeHead) {
      nodeHead = node;
    } else {
      nodeHead.next = node;
      node.prev = nodeHead;
      nodeHead = node;
    }

    if (node.next) {
      stack.push(node.next);
    }
    if (node.child) {
      stack.push(node.child);
    }
    node.child = null;
  }

  return head;
};
```
