// 20. Valid Parentheses

const isValid = function (s) {
  const stack = [];

  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch); // Push opening brackets onto the stack
    } else {
      if (stack.pop() !== map[ch]) { // If the popped element doesn't match the corresponding opening bracket, return false
        return false;
      }
    }
  }
  return stack.length === 0;
};

/** Approach :
 *  Here we are using stack to check if the parentheses are valid or not. We will push the opening brackets into the stack and when we encounter a closing bracket, we will check if the top of the stack is the corresponding opening bracket. If it is, we will pop the top of the stack and continue. If it is not, we will return false. At the end, if the stack is empty, we will return true, otherwise false.
 *  Time Complexity : O(n) where n is the length of the string s.
 *  Space Complexity : O(n) where n is the length of the string s.
 */
