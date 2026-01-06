const arr = [12, 35, 1, 10, 34, 1];

const secondLargest = (arr) => {
  if (arr.length < 2) return null;

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest; // here we got the ele which is greater than the firstLargest, so technically first largest is my second largest now.
      firstLargest = num;
    } else if (num > secondLargest && num < firstLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
};

console.log(secondLargest(arr));
