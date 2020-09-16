// These two functions come from Chai, our assertion library. Unlike Jasmine, the test framework we're using in this project doesn't come with assertions built-in, so we need to get assertions from another library.
const { expect, assert } = require("chai");
const sinon = require("sinon");

/***************************
 *  import functions here
 ***************************/
const arrayThreeSum = require("../05-threeSum/solution-threeSum.js");

/***************************
 *  Test Starts Here!
 ***************************/

// arrayThreeSum
describe("Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum", function () {
  it("returns an empty array if no triplets found", function () {
    const test1 = arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35);
    expect(test1).to.be.an("array");
    expect(test1).to.eql([]);
  });
  it("returns an array of a set of triplet in a nested array if one triplet is found.", function () {
    const test2 = arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10);
    expect(test2).to.be.an("array");
    expect(test2[0]).to.have.members([-3, 1, 12]);
  });
  it("returns an array of multiple triplets", function () {
    const test3 = arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
    expect(test3).to.be.an("array");
    expect(test3).to.have.lengthOf(3);
  });
});
