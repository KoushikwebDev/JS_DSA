const arr = [4, 9, 1, 2, 0];

const target = 0;

// by recursion
const linearSearch = (index = 0, arr, target) => {
  if (index === arr.length) return -1;

  if (arr[index] === target) return index;

  return linearSearch(index + 1, arr, target);
};

console.log(linearSearch(0, arr, target));

// by loop

const linearSearch2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};
