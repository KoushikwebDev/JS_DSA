// 61. Rotate List

/**
 Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
 */

const rotateRight = function (head, k) {
  let current = head;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
  }

  const actualRotateNeed = k >= length ? Math.floor(k % length) : k;
  if (!actualRotateNeed) return head;

  const dummy = new ListNode();
  dummy.next = head; // connected the existing list

  let slow = dummy,
    fast = dummy;

  for (let i = 0; i <= actualRotateNeed; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  const newHead = slow.next; // new list
  slow.next = null; // breaking the connection

  // find tail fo the new list
  let tail = newHead;
  while (tail && tail.next) {
    tail = tail.next;
  }

  tail.next = dummy.next; // connect tail to the original head

  return newHead;
};
