const arr = [12, 35, 1, 10, 34, 1];

const secondMinimum = (arr) => {
  if (arr.length < 2) return null;

  let firstMinimum = Infinity;
  let secondMinimum = Infinity;

  for (let num of arr) {
    if (num < firstMinimum) {
      secondMinimum = firstMinimum;
      firstMinimum = num;
    } else if (num < secondMinimum && num > firstMinimum) {
      secondMinimum = num;
    }
  }

  return secondMinimum;
};

console.log(secondMinimum(arr));
