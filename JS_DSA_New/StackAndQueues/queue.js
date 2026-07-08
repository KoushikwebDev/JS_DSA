// Queue => FIFO => First In First Out

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // adding an element to the end of the queue
  }

  dequeue() {
    return this.items.shift(); // removing an element from the front of the queue
  }

  front() { // also known as top
    return this.items[0]; 
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front()); // 10
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20