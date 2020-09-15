// These two functions come from Chai, our assertion library. Unlike Jasmine, the test framework we're using in this project doesn't come with assertions built-in, so we need to get assertions from another library.
const { expect, assert } = require("chai");
const sinon = require("sinon");

/***************************
 *  import functions here
 ***************************/
const palindromeCheck = require("../02-palindromeCheck/solution-palindromeCheck.js");

/***************************
 *  Test Starts Here!
 ***************************/

// Binary Search
describe("palindromeCheck: Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.", function () {
  it("returns false if the input string is not a palindrome", function () {
    const test1 = palindromeCheck("car");
    const test2 = palindromeCheck("racecar");
    expect(test1).to.equal(false);
    expect(test2).to.equal(true);
  });
  it("is case- insensitive", function () {
    const test3 = palindromeCheck("RaCecAr");
    expect(test3).to.equal(true);
  });
  it("can take special characters and spaces", function () {
    const test4 = palindromeCheck("!? 100 ABCcba 001 ?!");
    expect(test4).to.equal(true);
  });
});
