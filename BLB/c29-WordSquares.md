# Word Squares

## Topics: BbackTracking, Trie

---

## Solutions:

// solution 1:

```javascript
let Trie = class {
  constructor() {
    this.child = [];
    this.starts = [];
  }
};
var wordSquares = function (words) {
  let m = words[0].length;
  let n = words.length;
  let start = new Trie();
  let res = [];
  //if(words.length<n)return res;
  //build trie
  for (let i = 0; i < n; ++i) {
    let word = words[i];
    let cur = start;
    //store words in trie
    for (let j = 0; j < m; ++j) {
      let idx = word.charCodeAt(j) - "a".charCodeAt(0);
      if (cur.child[idx] == null) {
        cur.child[idx] = new Trie();
      }
      cur.starts.push(word);
      cur = cur.child[idx];
    }
  }
  let current = [];
  generate(res, current, start, 0, m, words);
  return res;
};

var generate = function (res, cur, trie, row, m, words) {
  if (row >= m) {
    res.push(cur.slice());
    return;
  }
  //make sure theres a word that exists in the trie comparing each row's index return if there isn't
  let current = trie;
  let str = "";
  for (let j = 0; j < row; ++j) {
    let idx = cur[j].charCodeAt(row) - "a".charCodeAt(0);
    if (current.child[idx] == null) {
      return;
    }
    current = current.child[idx];
  }
  for (let i = 0; i < current.starts.length; ++i) {
    let next = current.starts[i];
    cur.push(next);
    generate(res, cur, trie, row + 1, m, words);
    cur.pop();
  }
};
```
