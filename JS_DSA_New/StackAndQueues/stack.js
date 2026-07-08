
// Stack => LIFO => Last In First Out

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop(); // deleting the last element of the array, actually the top of the stack
  }

  peek() {
    return this.items[this.items.length - 1]; // the last element of the array, actually the top of the stack
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20