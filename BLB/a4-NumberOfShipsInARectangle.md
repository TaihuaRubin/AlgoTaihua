# Number of Ships in a Rectangle

## Topics: Divide and Conquer

---

## Solutions:

// solution 1:

```javascript
/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function (sea, topRight, bottomLeft) {
  let sum = 0;
  const [botX, botY] = bottomLeft;
  const [topX, topY] = topRight;
  if (!sea.hasShips(topRight, bottomLeft)) return 0;
  if (topX === botX && topY === botY) return 1;

  const midX = Math.floor((botX + topX) / 2);
  const midY = Math.floor((botY + topY) / 2);
  if (topX === botX) {
    sum += countShips(sea, [botX, midY], [botX, botY]);
    sum += countShips(sea, [topX, topY], [botX, midY + 1]);
  } else if (topY === botY) {
    sum += countShips(sea, [midX, botY], [botX, botY]);
    sum += countShips(sea, [topX, topY], [midX + 1, topY]);
  } else if (topY > botY && topX > botX) {
    sum += countShips(sea, [midX, midY], bottomLeft);
    sum += countShips(sea, [midX, topY], [botX, midY + 1]);
    sum += countShips(sea, topRight, [midX + 1, midY + 1]);
    sum += countShips(sea, [topX, midY], [midX + 1, botY]);
  }

  return sum;
};
```
