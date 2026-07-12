// 1021. Remove Outermost Parentheses
/**
 Input: s = "(()())(())"
Output: "()()()"
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function (s) {
  let result = "";

  const stack = [];

  for (let ch of s) {
    if (ch === "(") {
      stack.push(ch);

      const length = stack.length;
      if (length > 1) {
        result += ch;
      }
    } else {
      const length = stack.length;
      if (length > 1) {
        result += ch;
      }

      stack.pop();
    }
  }

  return result;
};

// without stack
const removeOuterParentheses2 = function (s) {
  let result = "";

  const level = 0;

  for (let ch of s) {
    if (ch === "(") {
      level++;

      if (level > 0) {
        result += ch;
      }
    } else {
      if (level > 0) {
        result += ch;
      }

      level--;
    }
  }

  return result;
};
