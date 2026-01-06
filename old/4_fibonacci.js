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
  if (num == 0) return 6;
  if (num == 1) return 7;

  return fibo(num - 1) + fibo(num - 2);
}

console.log("koushik", fibo(3));

const fibonacciSequence = (num) => {
  let fibo = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
};

console.log(fibonacciSequence(7));

function fibonacciRecursive(n, a = 6, b = 7) {
  if (n <= 0) {
    return a;
  } else {
    return fibonacciRecursive(n - 1, b, a + b);
  }
}

// Example usage:
const n = 10; // Change this to the desired Fibonacci number you want to find.
const result = fibonacciRecursive(n, 6, 7);
console.log(`The ${n}-th Fibonacci number is: ${result}`);
