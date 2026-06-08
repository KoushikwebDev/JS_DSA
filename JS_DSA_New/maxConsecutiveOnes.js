// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 Input: nums = [1,1,0,1,1,1]
Output: 3
 */

const nums = [1, 1, 0, 1, 1, 1];

const maxConsecutiveOnes = (arr) => {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;

      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};

console.log(maxConsecutiveOnes(nums));
