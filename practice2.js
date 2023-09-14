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
}

const stack = new Stack();

const sampleStr = "({[})";

const isBracketBalance = (str) => {
  if (!str.length > 2) return false;

  const openPairs = ["(", "{", "["];
  const closePairs = [")", "}", "]"];

  for (let i = 0; i < str.length; i++) {
    if (openPairs.includes(str[i])) {
      stack.push(str[i]);
    } else {
      let top = stack.pop();
      let topIndex = openPairs.indexOf(top);
      let closeBraceIndex = closePairs.indexOf(str[i]);

      if (topIndex !== closeBraceIndex) {
        return false;
      }
    }
  }

  return true;
};

// console.log(isBracketBalance(sampleStr));

const arr1 = [1, 4, 8, 10];
const arr2 = [2, 3, 9];

const mergeTwoSortedArray = (arr1, arr2) => {
  let i = 0,
    j = 0;

  let sortedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);

      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  let n = arr1.length;

  for (let k = 0; k < n; k++) {
    arr1[k] = sortedArray[k];
  }

  for (let l = n; l < arr2.length; l++) {
    arr1[l] = sortedArray[l];
  }

  return [arr1, arr2];
};

// console.log(mergeTwoSortedArray(arr1, arr2));

const circularShift = (arr, k) => {
  let newArr = arr.splice(arr.length - k);
  arr = [...newArr, ...arr];
  return arr;
};

console.log(circularShift([1, 2, 3, 4, 5], 1));

function dfsUtils(node) {
  if (!node) return -1;
  console.log(node.val);
  dfsUtils(node.left);
  dfsUtils(node.right);
}

function dfs() {
  dfsUtils(this.root);
}
