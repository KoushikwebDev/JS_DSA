const merge = (leftArray, rightArray) => {
  let sortedArray = [];

  let i = 0,
    j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      sortedArray.push(leftArray[i]);
      i++;
    } else {
      sortedArray.push(rightArray[j]);
      j++;
    }
  }

  while (i < leftArray.length) {
    sortedArray.push(leftArray[i]);
    i++;
  }

  while (j < rightArray.length) {
    sortedArray.push(rightArray[j]);
    j++;
  }

  return sortedArray;
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const arr = [10, 9, 14, 6, 2, 3, 7];
console.log(mergeSort(arr));
