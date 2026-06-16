function Nodee(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

// Head
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Nodee(val);
  if (!this.head) {
    this.head = newNode;
    this.size++;
    return;
  }

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// Tail
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Nodee(val);
  let current = this.head;

  if (!this.head) {
    this.head = newNode;
    this.size++;
    return;
  }

  while (current && current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
  this.size++;
};

// Add at Index
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return -1;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  const newNode = new Nodee(val);

  let current = this.head;

  for (let i = 0; i < index - 1; i++) {
    // index - 1 => i need to go upto prev node where i need to add new node
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;
  this.size++;
};

// get node by index

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  if (index === 0) {
    return this.head.val;
  }

  let current = this.head;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.val;
};

// delete at index
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let current = this.head;

  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  const nextNode = current.next.next;

  current.next = nextNode;
  this.size--;
};
