const arr = [5, 4, 14, 6, 2, 3, 7];
// const arr = ["ksaha", "apple", "aapple", "boyye"];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const pivotIndex = (arr, low, high) => {
  const pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high; j++) {
    if (pivot > arr[j]) {
      i++;
      swap(arr, i, j);
    }
  }

  i++;
  swap(arr, i, high);
  return i;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    const p = pivotIndex(arr, low, high);

    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
  return arr;
};

quickSort(arr, 0, arr.length - 1);

console.log(arr);

// by array
const quickSort2 = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)];
};

console.log(quickSort2(arr));

//
