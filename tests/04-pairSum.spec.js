// These two functions come from Chai, our assertion library. Unlike Jasmine, the test framework we're using in this project doesn't come with assertions built-in, so we need to get assertions from another library.
const { expect, assert } = require("chai");
const sinon = require("sinon");

/***************************
 *  import functions here
 ***************************/
const pairSum = require("../scripts/04-pairSum.js");

/***************************
 *  Test Starts Here!
 ***************************/

// pairSum
describe("pairSum: Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.", function () {
  it("returns true if any 2 different numbers within the array add up to sum", function () {
    const test1 = pairSum([1, 1, 2, 3, 4, 5], 7);
    const test2 = pairSum([0, 2, 3, 6, 9, 10], 10);
    expect(test1).to.equal(true);
    expect(test2).to.equal(true);
  });
  it("returns false if no 2 numbers in the array add up to sum", function () {
    const test3 = pairSum([1, 2, 3, 4, 5], 10);
    const test4 = pairSum([1, 2, 3, 7, 8], 7);
    const test5 = pairSum([1, 2, 3, 4, 5], 2);
    expect(test3).to.equal(false);
    expect(test4).to.equal(false);
  });
  it("returns false if array has less than two numbers", function () {
    const test6 = pairSum([1], 2);
    const test7 = pairSum([2], 2);
    const test8 = pairSum([], 1);
    expect(test6).to.equal(false);
    expect(test7).to.equal(false);
    expect(test8).to.equal(false);
  });
});
