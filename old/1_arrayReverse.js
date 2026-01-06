let arr = [-22, 1, 2, 3, 4, 5, 6];

const reverseArray = (arr) => {
  for (let i = 0; i <= arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  console.log(arr);
};

// reverseArray(arr);
// arr.reverse();
// console.log(arr);

const maxElement = (arr) => {
  if (!arr.length) return -1;

  let max = Number.MIN_SAFE_INTEGER;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const minElement = (arr) => {
  if (!arr.length) return -1;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
};

arr = [-22, -1, -2];
console.log(maxElement(arr));
console.log(minElement(arr));
