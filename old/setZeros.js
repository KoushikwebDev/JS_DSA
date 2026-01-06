const setZeros = (arr) => {
  let row = [],
    col = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (row[i] === 1) {
        arr[i][j] = 0;
      }

      if (col[j] === 1) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
};

const arr = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log(setZeros(arr));
