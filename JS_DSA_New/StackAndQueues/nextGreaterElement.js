// 496. Next Greater Element I

/**
 Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const nextGreaterElement = function (nums1, arr) {
    const stack = [];
    const map = new Map();
    const n = arr.length;
    stack.push(arr[n - 1]);
    map.set(arr[n-1], -1);

    for(let i = n - 2; i >= 0; i--){
        const ele = arr[i];

        while(stack.length && ele >= stack[stack.length - 1]){
            stack.pop();
        }

        if(stack.length === 0){
            map.set(ele, -1);
        } else {
            map.set(ele, stack[stack.length -1]);
        }

        stack.push(ele);
    }

    return nums1.map(ele => map.get(ele));
};

// Approach :
// 1. We will use a stack to keep track of the next greater elements.
// 2. We will iterate through the array from right to left and for each element, we will pop all the elements from the stack which are smaller than or equal to the current element.
// 3. If the stack is empty, then there is no next greater element for the current element, so we will map it to -1. Otherwise, we will map it to the top element of the stack.
// 4. Finally, we will return the mapped values for the elements in nums1.

// Time Complexity : O(n) where n is the length of arr.
// Space Complexity : O(n) where n is the length of arr.



