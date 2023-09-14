// let arr = [1, 2, 3, 2, 1, ];
let arr = "abcba";

const isPalindrom = (arr) => {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrom(arr));
