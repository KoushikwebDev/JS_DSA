// Bit operations
// OR, AND, NOT, XOR

const n = 10;

// right shift ==== divide by 2
// console.log(n >> 1); // 5
// console.log(n >> 2); // 2

// left shift ==== mutiplied by 2
// console.log(n << 1); // 20

const x = 10,
  y = 12;

// console.log(x & y); // 12
// console.log(x | y); // 14

const getLastBit = (n) => {
  return (n >> 1) & 1;
};

// console.log(getLastBit(6));

//
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
// console.log(dec2bin(15));

let arrBinary = [1, 2, 3, 4, 5, 6, 7, 8, 15];

const getBinaryForm = (arr) => {
  if (!arr.length) return -1;
  for (let i = 0; i < arr.length; i++) {
    let binaryValue = getOnes(arr[i]);
    arr[i] = binaryValue;
  }

  return arr;
};

// console.log(getBinaryForm(arrBinary));

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
// console.log(getOnes(15));

// nlogn
const getBinaryForm2 = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr[i] = getOnes(i);
  }
  return arr;
};

console.log(getBinaryForm2(15));

// n
// dynamic programming
const getBinaryOptimised = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i >> 1] + (i & 1);
  }
  return arr;
};

console.log(getBinaryOptimised(15));
