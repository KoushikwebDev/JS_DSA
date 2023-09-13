let sortArr = (arr) => {
  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] === 1) {
      oneCount++;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (zeroCount) {
      arr[j] = 0;
      zeroCount--;
    } else if (oneCount) {
      arr[j] = 1;
      oneCount--;
    } else {
      arr[j] = 2;
    }
  }
  return arr;
};

// let arr = [2, 0, 2, 1, 1, 0];
let arr = [1, 2, 0];

// console.log(sortArr(arr));

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const sortArrPointer = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  let k = 0;
  while (k <= j) {
    if (arr[k] === 0) {
      swap(arr, i, k);
      i++;
      k++;
    } else if (arr[k] === 2) {
      swap(arr, j, k);
      j--;
    } else {
      k++;
    }
  }
  return arr;
};

console.log(sortArrPointer(arr, 0, arr.length));
