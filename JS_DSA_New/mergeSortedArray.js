// 88. Merge Sorted Array

/**
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

const mergeSortedArray = (nums1, m, nums2, n) => {
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0,
    p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && (nums1Copy[p1] < nums2[p2]))) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  return nums1;
};

console.log(mergeSortedArray(nums1, m, nums2, n));

// solition II
const merge = (nums1, m, nums2, n)=>{
    let p1 = m -1, p2 = n -1;

    for(let i=m+n -1; i >= 0; i--){

        if(p2 < 0) return;

        if( p1 >= 0 && (nums1[p1] > nums2[p2])){
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    };
    return nums1;
}


// merge two sorted arrays into one sorted array

// [1, 3, 5], [2, 4, 6]
const mergeSortedArrays = (arr1, arr2) => {
  let mergedArray = []; // to store the merged result
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([0, 7, 8], [1, 3, 9])); // [0, 1, 3, 7, 8, 9]