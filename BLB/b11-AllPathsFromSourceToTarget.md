# Im a title

## Topics: Graph, Backtracking, Depth-first Search

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var tracer = (graph, vertex, result, curPath) => {
  // we terminate before we reach the goal vertex (graph at length-1)
  if (vertex === graph.length - 2) {
    result.push(curPath);
    return;
  }

  let choices = graph[vertex];
  // for loop for depth first search
  for (let i = 0; i < choices.length; i++) {
    newPath = [...curPath, choices[i]];
    // call tracer again =>  passing in vertex+1 & newPath
    tracer(graph, vertex + 1, result, newPath);
  }
};

var allPathsSourceTarget = function (graph) {
  // set a result
  let result = [];
  // call a back tracking function passing in the result, graph, current vertext(starting from 0), currentPath
  tracer(graph, 0, result, [0]);

  // return result
  return result;
};
```
