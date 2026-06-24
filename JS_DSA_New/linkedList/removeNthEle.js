// 19. Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// two pass approach
const removeNthFromEnd = function(head, n) {
    const dummy = {next : head}
    if(!head) return null;
    
    let length = 0;

    if(head.next === null) return null;

    let current = head;

    while(current){ // 1st pass
        length++;
        current = current.next;
    };

    const targetNodeIndex = length - n; // 0 based index

    let prev = dummy;

    for(let i = 0; i < targetNodeIndex; i++ ){ // 2nd pass
        prev = prev.next; // stop at previous node of which need to delete
    };

    prev.next = prev.next.next; // deleting target node the node

    return dummy.next;

};

// one pass approach
const removeNthEleFromEnd = (head, n) => {
    const dummy = { next : head};

    let fast = dummy, slow = dummy;

    // move fast pointer to the n position from starting
    for(let i = 0; i <= n; i++){
        fast = fast.next;
    }

    // move the both pointers by one step untill fast exist
    while(fast){
        fast = fast.next;
        slow = slow.next; // after loop end slow will be at the node before the one to remove
    };

    // now delete the target node
    slow.next = slow.next.next;

    return dummy.next;
}