# Remove All Adjacent Duplicates in String II

## Topics: Stacks

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*
Keep track of the characters that we have encountered and its count
If the character is in the bottom of the stack, meaning we have a duplicate, increment its count by 1
If not a dup, append it to the stack with count of 1
If the character's count equals to k, removing it by pop this element off the stack
For everything that's remained in the stack, iterate over and repeat base on its count
*/

var removeDuplicates = function (s, k) {
  let stack = [];

  let remove = false;
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      if (count === k - 1) {
        for (let p = 1; p < k; p++) {
          stack.pop();
        }
        remove = true;
        count = 1;
      } else {
        stack.push(s[i]);
        count++;
      }
    } else {
      count = 1;
      stack.push(s[i]);
    }
  }
  if (remove === false) return s;
  else return removeDuplicates(stack.join(""), k);
};
```
