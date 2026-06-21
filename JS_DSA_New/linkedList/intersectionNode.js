const getIntersectionNode = function (headA, headB) {
  let first = headA;
  let second = headB;
  while (first) {
    while (second) {
      if (first === second) return first;

      second = second.next;
    }

    first = first.next;
    second = headB;
  }

  return null;
};
// Time  : O(m * n) => O(n2)
// Space : O(1)

// by hash map
const getIntersectionNode2 = function (headA, headB) {
  const hashMap = new Set();
  let current = headA;
  while (current) {
    hashMap.add(current);
    current = current.next;
  }

  current = headB;
  while (current) {
    if (hashMap.has(current)) {
      return current;
    }
    current = current.next;
  }

  return null;
};
// Time  : O(m + n) => O(n)
// Space : O(n)

//

const getIntersectionNode3 = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;

    p2 = p2 ? p2.next : headA;
  }

  return p1;
};
// Time  : O(m + n) => O(n)
// Space : O(1)