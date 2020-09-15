// These two functions come from Chai, our assertion library. Unlike Jasmine, the test framework we're using in this project doesn't come with assertions built-in, so we need to get assertions from another library.
const { expect, assert } = require("chai");
const sinon = require("sinon");

/***************************
 *  import functions here
 ***************************/
const binarySearch = require("../01-binarySearch/solution-binarySearch");

/***************************
 *  Test Starts Here!
 ***************************/

// Binary Search
describe("binarySearch: Given a sorted list (array), and a target; return the indexof the target or -1 if target isnt included in the list", function () {
  it("takes an array and a target value as parameters", function () {
    const binarySearch1 = binarySearch([1, 2, 3, 4, 5, 6, 7], 6);
    const binarySearch2 = binarySearch([5, 7, 10, 31, 101, 250], 31);
    expect(binarySearch1).to.equal(5);
    expect(binarySearch2).to.equal(3);
  });
  it("returns -1 if target not included in list", function () {
    const binarySearch3 = binarySearch([1, 3, 5, 7], 2);
    expect(binarySearch3).to.equal(-1);
  });
});
