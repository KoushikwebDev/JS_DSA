class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.root = null;
  }

  push(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      let temp = this.root;
      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = node;
    }
    // console.log(this.root);
  }

  unshift(val) {
    let node = new Node(val);
    node.next = this.root;
    this.root = node;
  }

  search(val) {
    if (this.root === null) return false;

    let temp = this.root;
    while (temp !== null) {
      if (temp.val === val) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  delete(target) {
    if (this.root.val === target) {
      this.root = this.root.next;
      return;
    }

    let temp = this.root;
    while (temp.next && temp.next.val !== target) {
      temp = temp.next;
    }

    if (temp.next && temp.next.val === target) {
      let targetNode = temp.next;
      let targetNextNode = targetNode.next;
      temp.next = targetNextNode;
    }
  }

  reverse() {
    let prev = null,
      next = null;
    let curr = this.root;

    while (curr) {
      next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }
    this.root = prev;
  }

  reverseRecursion(cur) {
    if (cur === null || cur.next === null) {
      return cur;
    }

    let lastNode = this.reverseRecursion(cur.next);
    cur.next.next = cur;
    cur.next = null;

    return lastNode;
  }

  reverse2() {
    this.root = this.reverseRecursion(this.root);
  }

  findMiddle() {
    let slow = this.root;
    let fast = this.root;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.val);
  }
}

const linkedList = new SingleLinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.unshift(10);

// console.log(linkedList.search(459));

// console.log(linkedList.root);
// linkedList.delete(1);
// linkedList.delete(45);
// linkedList.delete(3);
// linkedList.delete(9);

// linkedList.reverse();

// linkedList.reverse2();

console.log(linkedList.root);
linkedList.findMiddle();
