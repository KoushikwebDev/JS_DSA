const findFizzBuzz = (n) => {
  for (let num = 1; num <= n; num++) {
    const mod3 = num % 3 === 0;
    const mod5 = num % 5 === 0;

    if (mod3 && mod5) {
      console.log("FizzBuzz");
    } else if (mod3) {
      console.log("Fizz");
    } else if (mod5) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
};

const n = 20;
findFizzBuzz(n);
