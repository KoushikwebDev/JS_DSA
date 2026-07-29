// 658. Find K Closest Elements

/**
 
Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3

Output: [1,2,3,4]
 */

// k = 4, x = 3, arr = [1,2,3,4,5] => it refers to 4 closest elements to 3 in the array, so the output is [1,2,3,4] as they are closest to 3.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */


const findClosestElements = function (arr, k, x) {
    let l = 0;
    let r = arr.length - k;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }
   return arr.slice(l, l+k)
};

const findClosestElements2 = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left + 1 > k) {
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      right--;
    }
  }

  return arr.slice(left, right + 1);
};


