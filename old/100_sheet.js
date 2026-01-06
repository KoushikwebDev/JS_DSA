//? write a function that takes in a string and returns the string reverse.

const stringReverse = (str) => {
  let reverseString = str.split("").reverse().join("");
  return reverseString;
};

console.log(stringReverse("Koushik"));

//? Write a function that takes in an array of numbers and returns the average of the numbers.

const findAvg = (arr) => {
  let sum = arr.reduce((acc, ele) => {
    return acc + ele;
  });

  return sum / arr.length;
};

console.log(findAvg([1, 2, 4]));

//? Write a function that takes in an array of strings and returns a new array with each string reversed.

const reverseArrayele = (arr) => {
  let reverse = arr.map((ele) => {
    return ele.split("").reverse().join("");
  });

  return reverse;
};

console.log(reverseArrayele(["KS", "Koushik"]));

//? Write a function that takes in a number and returns true if the number is prime and false otherwise.

const findIsPrime = (num) => {
  if (num <= 1) return false;

  const root = Math.sqrt(num);

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(findIsPrime(3));

//? Write a function that takes in a string and returns true if the string is palidrome, false otherwise.

const isPalidrome = (str) => {
  let reverseStr = str.split("").reverse().join("");
  if (reverseStr === str) {
    return true;
  }
  return false;
};

console.log(isPalidrome("abcba"));

//? Write a function that takes in an array of numbers and returns the largest number in the array.

const findLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
};

console.log(findLargest([1, 2, 3, 4, 5, 100]));

//? Write a function that takes in an array of strings and returns the shortest string in the array.

const findShortestString = (arr) => {
  let shortestString = arr[0];
  for (let str of arr) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }

  return shortestString;
};

console.log(findShortestString(["ks", "koushik", "k"]));

//? Write a function that takes in an array of abjects and returns the object with the highest value of a specific property.

function getObjectWithMaxProperty(arr, property) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  return arr.reduce((maxObj, currentObj) => {
    if (currentObj.score > maxObj.score) {
      return currentObj;
    }
    return maxObj;
  });

  //   return arr.reduce((maxObj, currentObj) => {
  //     if (currentObj[property] > maxObj[property]) {
  //       return currentObj;
  //     }
  //     return maxObj;
  //   });
}

const objects = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Charlieee", score: 1000 },
];

console.log(getObjectWithMaxProperty(objects));
