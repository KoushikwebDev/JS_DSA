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

    return node;
  }

  findLoop() {
    let slow = this.root,
      fast = this.root;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow.val === fast.val) {
        return true;
      }
    }
    return false;
  }
}
const linkedList = new SingleLinkedList();

linkedList.push(1);
linkedList.push(2);
const node3 = linkedList.push(3);
linkedList.push(4);
const node5 = linkedList.push(5);

node5.next = node3;

// console.log(linkedList.root);
console.log(linkedList.findLoop());
