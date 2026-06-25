// 83. Remove Duplicates from Sorted List

const deleteDuplicates = function(head) {
    const hashMap = new Set();
    const dummy = {next : head};
    let current = dummy;
    while(current && current.next){
        if(hashMap.has(current.next.val)){
            current.next = current.next.next
        } else {
            hashMap.add(current.next.val)
            current = current.next
        }
    };

    return dummy.next;
    
};

// for the sorted list
const deleteDuplicates2 = function(head) {
    if(!head) return null;
    let current = head;
    while(current && current.next){
        if(current.val === current.next.val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    };

    return head;
}