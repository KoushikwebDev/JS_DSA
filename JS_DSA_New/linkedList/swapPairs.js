// 24. Swap Nodes in Pairs

/**
 Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]

Output: [2,1,4,3]
 */


const swapPairs = function(head) {
    if(!head) return null;
    let slow = head, fast = head.next;

    while(slow && fast){
        let temp = slow.val;
        slow.val = fast.val;
        fast.val = temp;

        slow = slow.next.next;
        fast = fast.next ? fast.next.next : null;
    };

    return head;
};