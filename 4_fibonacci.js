let fibonacci = (n) => {
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let c = a + b;

    console.log(c);
    a = b;
    b = c;
  }
  return b;
};

console.log(fibonacci(7));

function fibo(num) {
  if (num < 2) return num;

  return fibo(num - 1) + fibo(num - 2);
}

// console.log(fibo(7));

const fibonacciSequence = (num) => {
  let fibo = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
};

console.log(fibonacciSequence(7));
