# Design UnderGround System

## Topics: **Design**

---

### Solutions:

```javascript
/*
checkin = {
id: startStation, time
}
trips = {
route: [checkout t - checkin time]
}

*/

var UndergroundSystem = function () {
  this.checkIns = {};
  this.routes = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  // customer can only be checked into one place
  this.checkIns[id] = { start: stationName, startTime: t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  // when customer checks out => we want to make it so that we reset the customer's checkin information
  // get the start time so that we can calculate the route
  // push into the routes
  let entry = this.checkIns[id];
  let route = entry["start"] + stationName;

  if (this.routes[`${route}`]) {
    this.routes[route].push(t - entry["startTime"]);
  } else {
    this.routes[route] = [t - entry["startTime"]];
  }

  this.checkIns[id] = {};
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  let route = startStation + endStation;

  let times = this.routes[route];

  let recordCount = times.length;
  let sum = 0;
  for (let i = 0; i < times.length; i++) {
    sum += times[i];
  }
  return sum / recordCount;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
```
