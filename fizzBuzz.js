let arr = [2, 4, 3, 9, 15, 18, 25, 30, 10, 27];

const findFizzBuzz = () => {
  for (let num of arr) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log("num", num);
    }
  }
};

findFizzBuzz(arr);
