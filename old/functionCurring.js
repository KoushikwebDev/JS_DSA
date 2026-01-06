// function sum(num1) {
//   return function sum2(num2) {
//     return function sum3(num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

//
// function sum(x) {
//   let currentSum = x;

//   function addNext(y) {
//     currentSum += y;
//     return addNext;
//   }

//   addNext.valueOf = function () {
//     return currentSum;
//   };

//   return addNext();
// }

// console.log(sum(1)(2)(3)); // Output: 6

// //
function sum(x) {
  let currentSum = x;
  function addNext(y) {
    if (typeof y === "undefined") {
      return currentSum;
    } else {
      currentSum += y;
      return addNext;
    }
  }

  return addNext;
}

console.log(sum(1)(2)(3)());

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(1)(2)(3));
