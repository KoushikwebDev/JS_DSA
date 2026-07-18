// 503. Next Greater Element II, circular array

/**
 Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
 */

const nextGreaterElements = function (nums) {
  const arr = [...nums, ...nums];
  const n = arr.length;
  const ans = Array(n).fill(-1);
  const stack = [];

  stack.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    const ele = arr[i];

    while (stack.length) {
      let top = stack[stack.length - 1];
      if (ele < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }

    stack.push(ele);
  }
  return ans.slice(0, n / 2);
};

// by index
const nextGreaterElements = function (arr) {
    const n = arr.length;
    const ans = Array(n).fill(-1);
    const stack = [];

    stack.push(arr[n - 1]);

    for (let i = (2 * n) - 2; i >= 0; i--) {
        const actulaIndex = i % n;
        const ele = arr[actulaIndex];

        while (stack.length) {
            let top = stack[stack.length - 1];
            if (ele < top) {

                ans[actulaIndex] = top;
                break;
            } else {
                stack.pop();
            }
        }

        stack.push(ele);

    }
    return ans.slice(0, n)


};