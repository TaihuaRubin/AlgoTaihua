// These two functions come from Chai, our assertion library. Unlike Jasmine, the test framework we're using in this project doesn't come with assertions built-in, so we need to get assertions from another library.
const { expect, assert } = require("chai");
const sinon = require("sinon");

/***************************
 *  import functions here
 ***************************/
const stringSearch = require("../scripts/03-stringSearch.js");

/***************************
 *  Test Starts Here!
 ***************************/

// string Search
describe("stringSearch: You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).", function () {
  it("returns -1 if needle not in haystack", function () {
    const test1 = stringSearch("hello world", "or");
    const test2 = stringSearch("howdy", "hello world");
    expect(test1).to.equal(-1);
    expect(test2).to.equal(-1);
  });
  it("returns the index where the needle is", function () {
    const test3 = stringSearch("or", "hello world");
    const test4 = stringSearch("oox", "ooboxoooxo");
    expect(test3).to.equal(7);
    expect(test4).to.equal(6);
  });
});
