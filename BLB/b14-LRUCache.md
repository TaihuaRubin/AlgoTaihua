# LRU Cache

## Topics: Design, Doubly-Linked List

---

## Solutions:

// solution 1:

```javascript
/*******************
 * LRU Cache = two data structures to manage the elements.
 * Map: used to store elements in the list
 * Double Linked List: used to keep track of the ordering when performing operations
 * A doubly-linked list and a map gives us the following:
 * Time complexity: O(1)
 * Space complexity: O(n)
 * This is achieved by having the doubly-linked list manage when we have to rearrange the elements while the map gives us direct
 * access to the resource. Look-up in a map is O(1) by providing the key.
 * We introduce the concept of
 * - the “head”, which is the least recently used entry,
 * - the “tail”, which is the most recently used entry,
 * to keep track of the order when elements are retrieved or added.
 * There are two pointers per node which is relatively low cost to manage the ordering.
 *******************/
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map(); //this stores the whole array

  //boundaries for double LL
  this.head = {};
  this.tail = {};
  this.head.next = this.tail; //initialize double LL
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    //remove elem from current position
    let c = this.map.get(key);
    c.prev.next = c.next;
    c.next.prev = c.prev;

    this.tail.prev.next = c; //insert it after the last element (elem before tail) since we just used it
    c.prev = this.tail.prev; //update c.prev and next pointer
    c.next = this.tail;
    this.tail.prev = c; //update last element as tail
    return c.value;
  } else {
    return -1; //element does not exist
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.get(key) !== -1) {
    //key does not exist, update last element value
    this.tail.prev.value = value;
  } else {
    //need to check if map size is at capacity
    if (this.map.size === this.capacity) {
      //delete item both from map and DLL
      this.map.delete(this.head.next.key); //delete first element of list
      this.head.next = this.head.next.next; //update first element as next element
      this.head.next.prev = this.head;
    }

    let newNode = {
      value,
      key,
    }; //each node is a hashtable that stores key and value

    //When adding a new node, we need to update both map and DLL
    this.map.set(key, newNode); //add current node to map
    this.tail.prev.next = newNode; //add node to end of the list
    newNode.prev = this.tail.prev; //update prev and next pointers of newNode
    newNode.next = this.tail;
    this.tail.prev = newNode; //update last element
  }
};
```
