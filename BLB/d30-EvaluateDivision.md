# Evaluate Division

## Topics: Union Find, Graph

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
  const graph = buildGraph(equations, values);

  const resp = new Array(queries.length);

  queries.forEach((query, i) => {
    const [u, v] = query;

    resp[i] = dfs(graph, u, v);
  });

  return resp;
};

const dfs = (graph, u, v) => {
  if (!graph.has(u) || !graph.has(v)) return -1;

  const stack = [{ vertex: u, accum: 1 }],
    visited = new Set();

  visited.add(u);
  let result = -1;
  while (stack.length) {
    const curr = stack.pop();
    if (curr.vertex === v) {
      result = curr.accum;
      break;
    }
    const adj = graph.get(curr.vertex);
    adj.forEach((edge) => {
      const dest = edge.v,
        w = edge.w;
      if (!visited.has(dest)) {
        visited.add(dest);
        stack.push({ vertex: dest, accum: curr.accum * w });
      }
    });
  }

  return result;
};

const buildGraph = (equations, values) => {
  const graph = new Map();

  equations.forEach((equation, i) => {
    const [u, v] = equation;
    const value = values[i];

    if (!graph.has(u)) graph.set(u, new Array());
    graph.get(u).push({ v: v, w: value });

    if (!graph.has(v)) graph.set(v, new Array());
    graph.get(v).push({ v: u, w: 1 / value });
  });

  return graph;
};
```
