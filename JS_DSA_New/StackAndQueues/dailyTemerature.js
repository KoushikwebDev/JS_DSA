// 739. Daily Temperatures

/**
 Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
 */

const dailyTemperatures = function (arr) {
  const stack = [];
  const n = arr.length;

  let ans = Array(n).fill(0);

  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    const ele = arr[i];

    while (stack.length) {
      const top = stack[stack.length - 1];

      if (ele >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }

      // ans [] already filled with 0, so not required
      // if(stack.length === 0){
      //     ans[i] = 0
      // }
    }

    stack.push(i);
  }

  return ans;
};


// Time Complexity : O(n) where n is the length of arr.
// Space Complexity : O(n) where n is the length of arr.