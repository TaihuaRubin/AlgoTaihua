const breadthFirst = (startingNode, callback) => {
  // we use a queue to iterate over the tree
  // progressively adding the children as we go
  // The tree begins with the first node
  const queue = [startingNode];
  // you might want to consider handling edges cases
  /// such as not receiving a properly formatted node
  // or make a proper Node constructor/prototype (see below)
  const result = [];
  while (queue.length) {
    // we shift off the array instead of iterating with a counter
    // as we are treating it as a queue (FIFO)
    const node = queue.shift();
    callback(node.value);
    result.push(node.value);
    // es6 format:
    queue.push(...node.children);
    // es5 might look like this if queue were a var (or let) instead of const
    // queue = queue.concat(node.children)
    // or:
    // queue.push.apply(queue, node.children)
  }
  return result;
};

// depth first seems trivial in comparison! Simply log the value
// and then call the function on each node
const depthFirstPreOrder = (startingNode, callback) => {
  callback(startingNode.value);
  startingNode.children.forEach((child) => {
    depthFirstPreOrder(child, callback);
  });
};

const depthFirstPostOrder = (startingNode, callback) => {
  startingNode.children.forEach((child) => {
    depthFirstPostOrder(child, callback);
  });
  callback(startingNode.value);
};

module.exports = {
  breadthFirst,
  depthFirstPostOrder,
  depthFirstPreOrder,
};
