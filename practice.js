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

  print() {
    console.log(this.root);
  }

  dfsUtils(node) {
    if (!node) return;

    console.log(node.val);

    this.dfsUtils(node.left);
    this.dfsUtils(node.right);
  }

  dfs() {
    this.dfsUtils(this.root);
  }

  checkMirrorTree(root1, root2) {
    if (root1 === null && root2) {
      return false;
    }

    if (root2 === null && root1) {
      return false;
    }

    if (root1.val !== root2.val) {
      return false;
    }

    return (
      this.checkMirrorTree(root1.left, root2.right) &&
      this.checkMirrorTree(root1.right, root2.left)
    );
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

const tree = new Tree(n1);
// tree.print();

tree.dfs();
