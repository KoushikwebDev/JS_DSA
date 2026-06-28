// 24. Swap Nodes in Pairs

/**
 Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]

Output: [2,1,4,3]
 */


// swaping values
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

// swaping nodes
const swapPairs2 = function(head) {
if (!head || !head.next) return head;
    
    const dummy = new ListNode(0);
    dummy.next = head; // connect the dummy node to the head of the list
    let prev = dummy;
    
    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;
        
        // Swap nodes
        first.next = second.next;
        second.next = first;
        prev.next = second; // now dummy points to the second node, so Everything is connected properly!
        
        // Move to next pair
        prev = first;
    }
    
    return dummy.next;
};

// by recursion
var swapPairs3 = function(head) {
    // BASE CASE: If list is empty or has 1 node, return as-is
    if (!head || !head.next) {
        return head;  // Nothing to swap
    }
    
    // STEP 1: Identify the pair
    let first = head;        // First node of current pair
    let second = head.next;  // Second node of current pair
    
    // STEP 2: Recursively swap the rest of the list
    // The recursive call returns the head of the swapped remaining list
    let swappedRest = swapPairs(second.next);
    
    // STEP 3: Connect first node to the swapped rest
    first.next = swappedRest;
    // Now: first → (swapped rest)
    
    // STEP 4: Make second point to first
    second.next = first;
    // Now: second → first → (swapped rest)
    
    // STEP 5: Return the new head (second)
    return second;
};