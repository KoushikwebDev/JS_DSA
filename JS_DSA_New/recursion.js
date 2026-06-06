// Sum of first n natural numbers
function sum(n){
    if(n === 1) return 1;

    return n + sum(n-1);
};

console.log(sum(5));

// Sum of an array
function sum2(arr){
    if(arr.length === 1) return arr[0];
    
    return arr[0] + sum2(arr.slice(1))
};

console.log(sum2([1,2,3,4]));

// Sum of odd numbers in an array
function sumOdd(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const firstElement = arr[0];

    if (firstElement % 2 !== 0) {
        return firstElement + sumOdd(arr.slice(1));
    }

    return sumOdd(arr.slice(1));
}

console.log(sumOdd([1, 2, 3, 4, 5])); // 9

// Factorial of a number
function fac(n){
    if(n === 1) return 1;
    
    return n * fac(n -1);
    
};


console.log(fac(3))

// Print numbers from 1 to n
function printNumbers(n) {
    if (n === 0) return;

    printNumbers(n - 1);

    console.log(n);
}

printNumbers(5);

// Print numbers from n to 1
function printNumbers(n) {
    if (n === 0) return;

    console.log(n);

    printNumbers(n - 1);

}

printNumbers(5);

// Fibonacci series, find out value of n position
function fib(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fib(n-1) + fib(n-2);
};

console.log(fib(5));

// is power of 2
function powOfTwo(n){
    if(n === 1) return true;
    if(n < 1 || n%2 !== 0) return false;

    return powOfTwo(n/2)
};

powOfTwo(3);

// Har recursive call ka result
// previous call ko return karna padta hai, warna value chain break ho jaati hai.


// Agar recursive function:

// koi value calculate kar raha hai
// boolean return kar raha hai
// array/string build kar raha hai
// required hota hai.