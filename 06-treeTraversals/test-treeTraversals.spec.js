// These two functions come from Chai, our assertion library. Unlike Jasmine, the test framework we're using in this project doesn't come with assertions built-in, so we need to get assertions from another library.
const { expect, assert } = require("chai");
const sinon = require("sinon");

/***************************
 *  import functions here
 ***************************/
const {
  breadthFirst,
  depthFirstPostOrder,
  depthFirstPreOrder,
} = require("../06-treeTraversals/solution-treeTraversals.js");

/***************************
 *  Setup
 ***************************/
const node = (value) => {
  return {
    value,
    children: [],
  };
};

const a = node("a");
const b = node("b");
const c = node("c");
const d = node("d");
const e = node("e");
const f = node("f");
const g = node("g");
const h = node("h");
const i = node("i");
const j = node("j");
const k = node("k");
const l = node("l");
const m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m, e);
d.children.push(i, j);

const nodeLogger = (node) => {
  console.log(node);
};

/***************************
 *  Test Starts Here!
 ***************************/

// arrayThreeSum
describe("breadth first solution : print out each `level` of the tree", function () {
  it("should log the correct node value to console in correct order", function () {
    const test1 = breadthFirst(a, nodeLogger);
    expect(test1).to.equal(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]);
  });
  // it("returns an array of a set of triplet in a nested array if one triplet is found.", function () {
  //   const test2 = arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10);
  //   expect(test2).to.be.an("array");
  //   expect(test2[0]).to.have.members([-3, 1, 12]);
  // });
  // it("returns an array of multiple triplets", function () {
  //   const test3 = arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
  //   expect(test3).to.be.an("array");
  //   expect(test3).to.have.lengthOf(3);
  // });
});
