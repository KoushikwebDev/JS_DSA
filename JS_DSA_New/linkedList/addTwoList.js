// 2. Add Two Numbers



const addTwoNumbers = function(l1, l2) {

   let dummy = new ListNode(0);
   let current = dummy;
   let carry = 0;

   while(l1 || l2 || carry){
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;

    carry = Math.floor(sum/10); 
    const needToAdd = sum % 10; // remaining value after carry

    current.next = new ListNode(needToAdd); // create new node with the sum
    current = current.next; // move to the next node

    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
   };

   return dummy.next;
    
};