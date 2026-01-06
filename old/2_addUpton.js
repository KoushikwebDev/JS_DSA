// worst case

function addUpto(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

console.log(addUpto(100));

// best case

function add(n) {
  return (n * (n + 1)) / 2;
}

console.log(add(100));

// Big - O

// O(1)
// O(log n)
// O(n)
// O(n log n)
// O(n^2)
