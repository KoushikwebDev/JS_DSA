// 278. First Bad Version

/*

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let left = 1;
        let right = n;

        while(left < right){
            const mid = left + Math.floor((right - left)/2);

            if(!isBadVersion(mid)){
                left = mid + 1
            } else {
                right = mid;
            }
        };

        return right;

    };
};