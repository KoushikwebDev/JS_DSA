//* 26. Remove Duplicates from Sorted Array => leetcode

//? Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

//? Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

const nums = [0,0,1,1,1,2,2,3,3,4]; // => [0,1,2,3,4,....]


const removeDuplicates = (arr)=>{
    if(arr.length < 2) return arr;

    let x = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(element > arr[x]){
            x = x + 1;
            arr[x] = element
        }
        
    };

    return arr;
    // or
    // return x + 1;
}


console.log(removeDuplicates([1,1,2]));


// 27. Remove Element => leetcode
/**
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

// const nums = [0,1,2,2,3,0,4,2]; => [0,1,3,0,4,....]

const removeElement = (arr, val)=>{

    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if(arr[i] !== val){
            arr[x] = arr[i];
            x++;
        }
        
    };

    arr.length = x;
    return arr;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));


// 344. Reverse String => leetcode

/**
 Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
 */

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

const arrString = ["h","e","l","l","o"];

const reverseString = (arr)=>{
    if(arr.length < 2) return arr;

    let left = 0, right = arr.length - 1;

    while(left <= right){
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
};

console.log(reverseString(arrString))

const reverseString2 = (arr)=>{
    const length = arr.length;
    if(length < 2) return arr;

    for(let i=0; i<Math.floor(length/2); i++){
        let temp = arr[i];
        arr[i] = arr[length -1 -i];
        arr[length -1 -i] = temp;
        
    }
    
    return arr;
};