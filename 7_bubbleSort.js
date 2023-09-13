let arr = [23, 3, 10, 34, 45, 5, 6, 89.1];

const bubbleSort = (arr) => {
  if (!arr.length) return;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

console.log(bubbleSort(arr)); //big O = n^2
