// 540. Single Element in a Sorted Array

/**
 Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10
 */


/**
 * @param {number[]} nums
 * @return {number}
 */

// here thinking is that find out the pair in which side and check if that side is odd or even, if odd then single element is in that side else it is in other side.

const singleNonDuplicate = function(arr) {
    let l = 0;
    let r = arr.length - 1;

    while(l <= r){
        const m = l + Math.floor((r - l)/2);
        if(arr[m - 1] !== arr[m] && arr[m+1] !== arr[m]) return arr[m]; // if single element is found
        // check pair in which side
        if(arr[m] == arr[m-1]){ // left pair
            const isLeftOdd = ((m - 1) - l) % 2 === 1;
            if(isLeftOdd){
                r = m - 2;
            } else {
                l = m + 1;
            }
        } else { // right pair
            const isRightOdd = (r - (m+1)) % 2 === 1;
            if(isRightOdd){
                l = m + 2
            } else {
                r = m - 1
            }
        }
    }
};
