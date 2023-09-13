class Stack {
  constructor() {
    this.stack = [];
  }

  length() {
    return this.stack.length;
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (!this.stack.length) return -1;

    return this.stack.pop();
  }

  peek() {
    if (!this.length()) {
      return -1;
    }
    return this.stack[this.length() - 1];
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();

const isBracketBalance = (str) => {
  const openPairs = ["(", "{", "["];
  const closePairs = [")", "}", "]"];

  for (let i = 0; i < str.length; i++) {
    if (openPairs.includes(str[i])) {
      stack.push(str[i]);
    } else {
      const top = stack.pop();
      const topIndex = openPairs.indexOf(top);
      const closeBraceIndex = closePairs.indexOf(str[i]);

      if (topIndex !== closeBraceIndex) {
        return false;
      }
    }
  }

  return stack.length() === 0;
};

const samplePairs = "({[[]})";
console.log(isBracketBalance(samplePairs));

stack.print();
