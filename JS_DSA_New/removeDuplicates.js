const arr = [2, 3, 1, 5, 6, 4, 8, 7, 5, 3, 2, 8];

const removeDuplicates = (arr) => {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
};

console.log(removeDuplicates(arr));
