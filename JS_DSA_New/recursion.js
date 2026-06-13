//? Def : When a function calls itself, untill it reaches the base case, is called recursion. 
//* A recursive function typically has two main components: a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems.

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
    // if(n <= 1) return n;

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


// Stack overflow error => jab recursive calls ki limit exceed ho jaati hai, toh stack overflow error aata hai. Iska matlab hai ki function apne aap ko itni baar call kar raha hai ki memory limit exceed ho jaati hai. Isse bachne ke liye, hume base case ko sahi tarah se define karna chahiye aur ensure karna chahiye ki recursive calls base case tak pahunchti hain.



// reverse an array
const reverse = (arr, left = 0, right = arr.length -1) =>{
    if(arr.length < 2) return arr;

    if(left >= right) return;

    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    reverse(arr, left+1, right -1);

    return arr;
};

console.log(reverse([1,2,3]));

// Is palidrome

const isPalidrome = (str, left=0, right=str.length-1)=>{
    if(str.length < 3) return str;

    if(left >= right) return true;

    if(str[left] !== str[right]) return false;

    return isPalidrome(str, left+1, right-1);
}

console.log(isPalidrome("madam"));


// subsequence of an array
const subSequence = (index=0, arr, current=[], result=[])=> {

    const n = arr.length;

    if(index >= n) {
        result.push([...current]);
        return;
    };


    current.push(arr[index]); //current element ko include kar rahe
    subSequence(index+1, arr, current, result);

    current.pop(); //backtrack
    subSequence(index+1, arr, current, result); //current element ko include nahi kar rahe

    return result;
};

console.log(subSequence(0,[3,1,2]))


// subsequence of array of length n, and sum is k

const subSequence2 = (index=0, arr, current=[], result=[], sum=0, k) =>{
    if(index >= arr.length) {
        if(sum !== k) return;
        result.push([...current]);
        return;
    };

    current.push(arr[index]);
    sum += arr[index];
    subSequence2(index+1, arr, current, result, sum, k);

    current.pop();
    sum -= arr[index];
    subSequence2(index+1, arr, current, result, sum, k);

    return result;
};
console.log(subSequence2(0, [3,1,2], [], [], 0, 3))




