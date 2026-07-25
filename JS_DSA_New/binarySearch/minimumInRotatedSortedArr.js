// 153. Find Minimum in Rotated Sorted Array

/*
Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/

const findMin = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // for the fully sorted arr
        if (arr[left] <= arr[right]) return arr[left];

        const mid = left + Math.floor((right - left) / 2);
        // here finding the rotating point
        if (arr[mid] < arr[mid - 1]) return arr[mid];
        // if left is non sorted, so here is the ans
        if (arr[left] > arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
};