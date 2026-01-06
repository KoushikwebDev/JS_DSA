// LIFO => Last in first out

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (!this.stack.length) return -1;

    return this.stack.pop();
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.print();
stack.pop();
stack.print();
