// binary search iterative
let arr = [1, 2, 3, 4, 5, 6];

const binarySearch = (arr, target) => {
  if (!arr.length) return -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) return mid;
    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

// binary search recursion
const binarySearchRec = (arr, target, start, end) => {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (target === arr[mid]) return mid;
  if (target < arr[mid]) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }

  return binarySearchRec(arr, target, start, end);
};

console.log(binarySearch(arr, 4));
console.log(binarySearchRec(arr, 4, 0, arr.length - 1)); //logn, array is getting half in every time
// Big O =  logN worst case, O(1) best case

// lenear search

let arr2 = [1, 2, 4, 56, 7, 8, 10];

const lenearSearch = (arr, target) => {
  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) return i;
  }
  return -1;
};

console.log(lenearSearch(arr2, 10));
