class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  pop() {
    if (!this.stack.length) return -1;

    return this.stack.pop();
  }

  top() {
    if (!this.stack.length) return -1;

    return this.stack[this.stack.length - 1];
  }

  print() {
    console.log(this.stack);
  }
}

const findNGE = (arr) => {
  const stack = new Stack();
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.top() <= arr[i]) {
      while (!stack.isEmpty() && stack.top() <= arr[i]) {
        stack.pop();
      }
    }

    result.push(stack.top());
    stack.push(arr[i]);
  }

  console.log(result.reverse());
};

const arr = [5, 7, 1, 2, 6, 0];
findNGE(arr);
