const swapTwoNums = () => {
  let a = 3,
    b = 4;

  a = a - b;
  console.log(a);

  b = a + b;
  console.log(b);

  a = b - a;

  console.log(a, b);
};

// swapTwoNums();

const swapTwoNumsBitWise = () => {
  let a = 3,
    b = 4;

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log(a, b);
};

swapTwoNumsBitWise();

//

const swapTwoNums2 = () => {
  let a = 3,
    b = 4;

  let c = a;
  a = b;
  b = c;

  console.log(a, b);
};

swapTwoNums2();
