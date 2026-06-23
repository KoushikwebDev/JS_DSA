// 203. Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

const removeElements = function (head, val) {
  if (!head) return null;

  while (head && head.val === val) {
    head = head.next; // its removing all repetaing char from starting
  }
  if (!head) return null;

  let prev = head;
  let current = head.next;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
      //   now no need to shift the prev as one node is removed
    } else {
      prev = current;
    }

    current = current.next;
  }

  return head;
};

// by sentinel node or dummy node for the prev node
const removeElement3 = function (head, val) {
    const sentinal = { next : head };
    let prev = sentinal;
    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next
        }
    };

    return sentinal.next;
}

const removeElements2 = function (head, val) {
    const dummy = { next: head };
    let prev = dummy, current = head;
    while (current) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }

        current = current.next;
    };

    return dummy.next;
};

