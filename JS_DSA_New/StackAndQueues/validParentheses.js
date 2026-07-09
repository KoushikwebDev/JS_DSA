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
      stack.push(ch);
    } else {
      if (stack.pop() !== map[ch]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
