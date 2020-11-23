# Decode String

## Topics: Stacks, Depth-first search

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    if (char === "]") {
      //find the closest open bracket
      let open = stack.lastIndexOf("[");
      let subArr = stack.splice(open, stack.length - open);

      subArr = subArr.slice(1); // get rid of the "["
      // find num
      let num = "";
      while (stack.length) {
        // check last
        if (Number(stack[stack.length - 1]) < 10 && Number(stack[stack.length - 1]) >= 0) {
          num = `${stack.pop()}` + num;
        } else {
          break;
        }
      }

      // push string into stack again
      for (let j = 1; j <= num; j++) {
        stack = stack.concat(subArr);
      }
    }
  }

  return stack.join("");
};
```
