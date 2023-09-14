class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  dfsUtils(node) {
    if (!node) return;

    console.log(node.val); // print current value
    this.dfsUtils(node.left); // move to left sub-tree
    this.dfsUtils(node.right); // move to right sub-tree
  }

  dfs() {
    this.dfsUtils(this.root);
  }

  maxVal(node) {
    if (!node) {
      return Number.NEGATIVE_INFINITY;
    }

    return Math.max(
      node.val,
      Math.max(this.maxVal(node.left), this.maxVal(node.right))
    );
  }

  minVal(node) {
    if (!node) {
      return Number.POSITIVE_INFINITY;
    }

    return Math.min(
      node.val,
      Math.min(this.minVal(node.left), this.minVal(node.right))
    );
  }

  isBSTUtil(node) {
    if (!node) return true;

    if (node.left && this.maxVal(node.left) >= node.val) {
      return false;
    }

    if (node.right && this.minVal(node.right) <= node.val) {
      return false;
    }

    return this.isBSTUtil(node.left) && this.isBSTUtil(node.right);
  }

  isBST() {
    return this.isBSTUtil(this.root);
  }

  findHeightUtil(node) {
    if (!node) return 0;

    return (
      1 +
      Math.max(this.findHeightUtil(node.left), this.findHeightUtil(node.right))
    );
  }

  findHeight() {
    return this.findHeightUtil(this.root);
  }
}

// const n1 = new Node(1);
// const n2 = new Node(2);
// const n3 = new Node(3);
// const n4 = new Node(4);
// const n5 = new Node(5);
// const n6 = new Node(6);
// const n7 = new Node(7);

// n1.left = n2;
// n1.right = n3;

// n2.left = n4;
// n2.right = n5;

// n3.left = n6;
// n3.right = n7;

const n8 = new Node(8);
const n3 = new Node(3);
const n10 = new Node(10);
const n1 = new Node(1);
const n6 = new Node(6);
const n14 = new Node(14);
const n4 = new Node(4);
const n7 = new Node(7);
const n13 = new Node(13);

n8.left = n3;
n8.right = n10;

n3.left = n1;
n3.right = n6;

n10.right = n14;
n14.left = n13;

n6.left = n4;
n6.right = n7;

const tree = new Tree(n8);

// tree.dfs();

console.log(tree.isBST());
console.log(tree.findHeight());
