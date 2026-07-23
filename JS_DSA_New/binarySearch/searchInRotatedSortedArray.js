// 33. Search in Rotated Sorted Array

/*
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        const mid = left + Math.floor((right - left)/2);

        if(nums[mid] === target) return mid;
        // left sorted
        if(nums[left] <= nums[mid]){
            if(target < nums[mid] && target >= nums[left]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        } else { // right sorted
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    };

    return -1;
};