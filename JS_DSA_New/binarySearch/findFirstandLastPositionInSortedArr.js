// 34. Find First and Last Position of Element in Sorted Array

/**
 Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const searchRange = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  const result = [-1, -1];

  // first index
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    if (target > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  result[0] = arr[r] === target ? r : -1;

  // if target doesn't exist
  if (result[0] === -1) {
    return result;
  }

  l = 0;
  r = arr.length - 1;

  // last index
  while (l < r) {
    const m = l + Math.ceil((r - l) / 2);

    if (target < arr[m]) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  result[1] = arr[l] === target ? l : -1;

  return result;
};
