# Invalid Transactions

## Topics: Array, String

---

## Solutions:

// solution 1:

```javascript
var invalidTransactions = function (transactions) {
  let arr = transactions.map((x) => x.split(","));
  let obj = {};
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i][0]]) {
      obj[arr[i][0]] = [];
      obj[arr[i][0]].push(arr[i]);
    } else obj[arr[i][0]].push(arr[i]);
  }

  for (let key in obj) {
    let item = obj[key];

    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < item.length; j++) {
        if (item[i][2] > 1000) {
          /*一旦符合条件，放进res，并退出本层循环*/
          res.push(item[i].join(","));
          break;
        }
        if (Math.abs(item[i][1] - item[j][1]) <= 60 && item[i][3] !== item[j][3]) {
          /*一旦符合条件，放进res，并退出本层循环*/
          res.push(item[i].join(","));
          break;
        }
      }
    }
  }
  return res;
};
```
