// 162. Find Peak Element

/**
 
Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid + 1] > nums[mid]) {
      // if the next element is greater than mid, then we can say that the peak element is on the right side of mid, so we can move left to mid + 1
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
