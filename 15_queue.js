// FIFO => first in first out

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
  }

  enQueue(val) {
    this.queue.push(val);
  }

  deQueue() {
    if (!this.queue.length) return -1;
    return this.queue[this.front++];
  }

  printQueue() {
    console.log(this.queue.slice(this.front));
  }
}

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);

queue.printQueue();

queue.deQueue();
queue.printQueue();
