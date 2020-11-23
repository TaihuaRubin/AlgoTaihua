# Word Break 2

## Topics: Dynamic Programming, backtracking

---

## Solutions:

// solution 1: top down DP

```javascript
const wordBreak = (s, wordDict) => {
  const dp = new Map(); //Set up DP - index: substrings of s given any starting point until the end of s, value: the string of space separated words found in wordDict that connects the index substring's starting point to the end if that is possible (if the substring cannot be built from wordDict, store [ ])
  const DFS = (str) => {
    if (str.length === 0) return [""];

    if (dp.get(str)) return dp.get(str);

    const viable = [];
    [...wordDict].forEach((word) => {
      if (str.slice(0, word.length) === word) {
        const downstreamviable = DFS(str.slice(word.length)); //At each DFS level, chop off another leading section of the string that matches a wordDict word
        for (v of downstreamviable) //from the base condition coming back out of the DFS, add the words that were found separated by spaces to the list of viables from that point until we get back to the beginning
          viable.push(word + (v.length === 0 ? "" : " ") + v); //for each viable path, we push a new string to viable
      }
    });
    dp.set(str, viable);
    return viable; //When we get back to the outside of the DP, we are left with string(s) that are comprised of possible full decompositions of s into words from wordDict separated by spaces
  };
  return DFS(s);
};
```

// solution 2 : trie

```javascript
var wordBreak = function (s, wordDict) {
  const trie = {};
  for (let word of wordDict) {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.end = true;
  }
  const cache = {};
  const dfs = (i) => {
    if (i === s.length) return [""];
    if (cache[i]) return cache[i];

    const start = i;
    let res = [];
    let node = trie[s[i++]];
    while (node) {
      if (node.end) {
        const prev = dfs(i);
        for (let str of prev) {
          const curr = s.slice(start, i);
          if (str) res.push(curr + " " + str);
          else res.push(curr);
        }
      }
      node = node[s[i++]];
    }
    return (cache[start] = res);
  };
  return dfs(0, trie);
};
```
