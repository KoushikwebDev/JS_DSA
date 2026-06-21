/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 141. Linked List Cycle => Leetcode
// Hashing
const hasCycle = function(head) {

    const seen = new Set();
    let current = head;
    while(current){
        if(seen.has(current)){
            return true;
        } else {
            seen.add(current)
        }

        current = current.next;
    }
    return false;
};

// Floyd's Cycle Detection Algorithm (Tortoise and Hare Algorithm)
const hasCycle = function(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};