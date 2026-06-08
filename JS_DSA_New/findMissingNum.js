// 268. Missing Number


/**
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


 nums = [3,0,1]

 Output: 2
*/

const nums = [3, 0, 1];

const findMissingNums = (arr) =>{
    const n = arr.length;
    const expectedSum = (n*(n+1))/2;
    const actualSum = arr.reduce((acc, item)=> {
       return acc + item;
    }, 0 )

    return expectedSum - actualSum
};

console.log(findMissingNums(nums));