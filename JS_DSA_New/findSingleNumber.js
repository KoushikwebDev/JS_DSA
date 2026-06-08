// 136. Single Number

/**
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]

Output: 1
 */

const nums = [2, 2, 1];

const findSingleNum = (arr) => {
  const hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      hashMap[arr[i]]++;
    } else {
      hashMap[arr[i]] = 1;
    }
  }

  for (let key in hashMap) {
    if (hashMap[key] === 1) {
      return Number(key);
    }
  }

  return -1;
};

console.log(findSingleNum(nums));

// solution II => XOR, the logic is a ^ a = 0 and a ^ 0 = a, so if we XOR all the numbers, the duplicate numbers will cancel out and we will be left with the single number. This solution has a linear runtime complexity and uses only constant extra space.
const findSingleNum = (arr) => {

    let result = 0;

    for (let num of arr) {
        result ^= num;
    }

    return result;
};

console.log(findSingleNum(nums));

// a ^ a = 0
// a ^ 0 = a
