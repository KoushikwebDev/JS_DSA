const isPalindrome = function(head) {
    const arr = [];
    let current = head;
    while(current){
        arr.push(current.val);
        current = current.next;
    };

    for(let i = 0; i < arr.length/2; i++){
        if(arr[i] !== arr[arr.length -1 - i]) return false;
    }

    return true;
};

// 
const isPalindrome2 = function(head) {
    let slow = head, fast = head;
    // find middle
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    };
    // reverse second half
    let prev = null;
    let current = slow; // the middle node
    while(current){
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    // checking the palidrome
    let firstList = head;
    let secondList = prev; // now prev is the last node

    while(secondList){
        if(firstList.val !== secondList.val) return false;
        firstList = firstList.next;
        secondList = secondList.next
    }
    return true;

};