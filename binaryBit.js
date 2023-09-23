// Bit operations
// OR, AND, NOT, XOR

const n = 10;

// right shift ==== divide by 2
console.log(n >> 1); // 5
console.log(n >> 2); // 2

// left shift ==== mutiplied by 2
console.log(n << 1); // 20

const x = 10,
  y = 12;

console.log(x & y); // 12
console.log(x | y); // 14

const getLastBit = (n) => {
  return (n >> 1) & 1;
};

console.log(getLastBit(6));

const getOnes = (n) => {
  let one = 0;
  while (n !== 0) {
    if (n & 1) {
      one++;
    }
    n = n >> 1;
  }

  return one;
};
console.log(getOnes(15));
