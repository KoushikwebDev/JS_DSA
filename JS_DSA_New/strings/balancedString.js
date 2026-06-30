// 1221. Split a String in Balanced Strings

/**
 Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.


Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 */

const balancedStringSplit = function (s) {
  let count = 0;
  let r = 0,
    l = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      r++;
    } else {
      l++;
    }

    if (r === l) {
      count++;
      r = 0;
      l = 0;
    }
  }
  return count;
};

// by using a single counter
const balancedStringSplit2 = function (s) {
  let temp = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }

    if (temp === 0) {
      count++;
    }
  }

  return count;
};
