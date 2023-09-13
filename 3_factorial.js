let factorial = (num) => {
  if (num < 2) return 1;

  return num * factorial(num - 1);
};

console.log(factorial(4));

let fac = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
};

console.log(fac(4));

// both have big-O(n)

/*
Both functions have a linear time complexity of O(n), where n is the input value num. They have the same time complexity, but the recursive approach may have slightly more overhead due to the function call stack, although for small values of num, this difference is usually negligible.
*/
