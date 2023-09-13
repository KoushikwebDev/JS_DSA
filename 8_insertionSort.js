let arr = [23, 3, 10, 34, 45, 5, 6, 89.1];

function insertionSort(arr) {
  let currentValue;

  for (let i = 1; i < arr.length; i++) {
    currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort(arr));
