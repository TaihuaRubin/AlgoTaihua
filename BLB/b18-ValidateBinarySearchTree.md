# Validate Binary Search Tree

## Topics: Tree, Depth-first Search

---

## Solutions:

// solution 1:

```javascript
This is a very classic BST problem, we just need to scan every single node in the tree and see if the node's value matches the BST rules, that is all the values in node's left subtree are less than the value in node, and all the values in node's right subtree are greater than the value in node, if we found a node that doesn't satisfy the rules, simply return false from the recursion.

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }

        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, null, null);
};
```

// DFS

```javascript
var isValidBST = function (root, lower = -Infinity, upper = Infinity) {
  if (!root) return true;

  let val = root.val;

  if (val <= lower || val >= upper) return false;

  return isValidBST(root.left, lower, val) && isValidBST(root.right, val, upper);
};
```
