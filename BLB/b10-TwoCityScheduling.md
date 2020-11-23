# Two City Scheduling

## Topics: Greedy

---

## Solutions:

// solution 1:

```javascript
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  // sort the array by the "impact" of the decision

  // a city should have costs.length/2 people & b city the same
  // so start by taking the largest impact => make this person go to the cheaper one
  // until the city is full

  // sum variable
  // cityA var
  // cityB var

  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1])); // n log n

  let totalCost = 0;
  let cityA = 0;
  let cityB = 0;

  // loop through costs array
  for (let i = 0; i < costs.length; i++) {
    // n
    // find diff
    let person = costs[i];
    if (person[0] < person[1]) {
      // check if A city is full
      if (cityA < costs.length / 2) {
        cityA++;
        totalCost += person[0];
      } else {
        cityB++;
        totalCost += person[1];
      }
    } else {
      if (cityB < costs.length / 2) {
        cityB++;
        totalCost += person[1];
      } else {
        cityA++;
        totalCost += person[0];
      }
    }
  }

  return totalCost;
};
```
