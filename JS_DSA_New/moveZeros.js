// 283. Move Zeroes

/**
 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
 */

// here the logic is move the non zeros to the left, by swaping with zero
const nums = [0, 1, 0, 3, 12];

const moveZeros = (arr) => {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      const temp = arr[x];
      arr[x] = arr[i];
      arr[i] = temp;
      x++;
    }
  }

  return arr;
};

console.log(moveZeros(nums));

// solution II

const move = (arr) => {
  let i = 0,
    j = 0;

  while (i < arr.length) {
    if (arr[i] !== 0) {
      const temp = arr[j];

      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }

    i++;
  }

  return arr;
};

console.log(move(nums));
