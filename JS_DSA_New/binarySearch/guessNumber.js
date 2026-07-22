// 374. Guess Number Higher or Lower

/**
 Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:
    
Input: n = 1, pick = 1
Output: 1
 */

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */


const guessNumber = function(n) {
    let l = 1;
    let r = n;

    while(l <= r){
        const mid = l + Math.floor((r-l)/2);
        const res = guess(mid);
        if(res === 0) return mid;
        else if(res < 0){
            r = mid -1;
        } else {
            l = mid + 1;
        }
    };

    return -1;
};