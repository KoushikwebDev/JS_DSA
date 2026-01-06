const arr1 = [1, 4, 8, 10];
const arr2 = [2, 3, 9];

const mergeTwoSortedArray = (arr1, arr2) => {
  let sortedArray = [];
  let i = 0;
  j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  const n = arr1.length;
  for (let k = 0; k < n; k++) {
    arr1[k] = sortedArray[k];
  }

  for (let l = 0; l < arr2.length; l++) {
    arr2[l] = sortedArray[n + l];
  }

  return [arr1, arr2];
};

// console.log(mergeTwoSortedArray(arr1, arr2));

const mergeTwoSortedArrayOptimal = (arr1, arr2) => {
  let i = arr1.length - 1,
    j = 0;

  while (i >= 0 && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      let temp = arr1[i];
      arr1[i] = arr2[j];
      arr2[j] = temp;
      i--;
      j++;
    } else {
      break;
    }
  } // min (m, n)

  const compareCb = (a, b) => a - b;
  arr1.sort(compareCb); // mlogm
  arr2.sort(compareCb); // nlogn

  // x = max(m, n)
  // xlogx
};

mergeTwoSortedArrayOptimal(arr1, arr2);
console.log(arr1, arr2);
