const circularShift = (arr, k) => {
  let newArr = arr.splice(arr.length - k);
  arr = [...newArr, ...arr];

  return arr;
};

//

const reverse = (arr, i, j) => {
  const n = j - i;

  for (let k = i; k < n / 2; k++) {
    let temp = arr[k];
    arr[k] = arr[j];
    arr[j] = temp;
    j--;
  }
};

const circularShiftOptimized = (arr, k) => {
  const n = arr.length - 1;

  reverse(arr, 0, n);
  reverse(arr, 0, n - k);
  reverse(arr, n - k + 1, n);

  return arr;
};

const arr = [1, 2, 3, 4, 5, 6];
const k = 1;
// console.log(circularShift(arr, k));
console.log(circularShiftOptimized(arr, k));
// console.log(reverse(arr, 0, 3));
