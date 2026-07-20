const arr = [1, 2, 3, 4, 5, 6, 9, 100];

const target = 100;

const binarySearch = (arr, target) => {
  let left = 0;
  right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  };

  return -1;
};

console.log(binarySearch(arr, target));

// optimised formula for finding mid is left + [(right - left) / 2], this will prevent overflow in case of large numbers. This will never exceed the maximum value of integer in JS, as it will always be less than or equal to right.
