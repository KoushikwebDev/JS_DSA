// 69. Sqrt(x)

/**
 Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
 */

const mySqrt = function(x) {
    // square root of x is always less than or equal to x/2 for x >= 2, so range is from 2 to x/2, and for x < 2, the square root is x itself.
    if(x < 2) return x;
    let left = 2;
    let right = Math.floor(x/2);

    while(left <= right){
        const mid = Math.floor(left + (right - left) / 2);

        if(mid**2 === x) return mid;

        if(mid**2 < x){
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }

    return right; // right will be the largest number whose square is less than or equal to x, so we return right.
};