# Meeting Rooms 2

## Topics: Heap, Greedy, Sort

---

## Solutions:

// solution 1: chronological sort

```javascript
function minMeetingRooms(intervals) {
  const starts = intervals
    .slice() // make sure shallow copy, otherwise when sort 'ends', 'starts' will change too
    .map((a) => a[0])
    .sort((a, b) => a - b);

  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  let room = 0;
  let endIdx = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[endIdx]) {
      room++;
    } else {
      endIdx++;
    }
  }
  return room;
}
```

// solution 2: Min heap

```javascript
Time Complexity: O(n log n)
Space Complexity: O(1)

/**
 * @param {number[][]} intervals
 * @return {number}
 */

class MinHeap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.size()-1);
    }

    bubbleUp(index){

        while(index > 0){

            let parentIndex = Math.floor( (index - 1)/2);

            if(this.heap[parentIndex][1] < this.heap[index][1]) break;


            this.swap(parentIndex,index);
            index = parentIndex;
        }
    }

    peek(){
        if(this.size()==0) return;
        else this.heap[0];
    }

    poll(){
        let min = this.heap[0];
        let last = this.heap.pop();
        if(this.size() !==0){
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleDown(index){
        let left = 2 * index + 1, right = 2 * index + 2;
        let min = index;

        if(left < this.size() && this.heap[left][1] < this.heap[min][1]) min = left;

        if(right < this.size() && this.heap[right][1] < this.heap[min][1]) min = right;

        if(min !== index){
            this.swap(min,index);
            this.bubbleDown(min);
        }

    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
     }

    size(){
        return this.heap.length;
    }

}

var minMeetingRooms = function(intervals) {
    // sort on the basis of start time.
    intervals.sort((a,b) => a[0] - b[0]);

    let minHeap = new MinHeap();

    let prev = null;

    if(intervals.length > 0) minHeap.insert(intervals[0]);
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] >= minHeap.heap[0][1] ){
            minHeap.poll();
            minHeap.insert(intervals[i]);
        }
        else{
          minHeap.insert(intervals[i]);
        }
    }

    return minHeap.size();
};
```
