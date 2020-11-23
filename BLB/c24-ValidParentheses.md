# valid parenthesis

## Topics: Stacks, string

---

## Solutions:

// solution 1:

```javascript
Using JavaScript array as a stack. This loops through and when fining the opening bracket it pops it out of the stack, and if the stack is empty after looping through, then we can assume all open brackets had a corresponding close bracket.

var isValid = function(s) {
 const stack = [];

  for(let char of s) {
    if(char === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if(char === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if(char === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else {
      stack.push(char);
    }

  }

  return stack.length === 0
};
```

// solution2 : map and stack

```javascript
var isValid = function (s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === map[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0 ? true : false;
};
```
