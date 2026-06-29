// 58. Length of Last Word

/**
 Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 */

// by trimming the string and then counting the length of the last word
const lengthOfLastWord = function (s) {
  let count = 0;
  let str = s.trim();
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") break;
    count++;
  }

  return count;
};

// by manual two loops
const lengthOfLastWord2 = function (s) {
  let count = 0;
  let i = s.length - 1;

  while (i >= 0 && str[i] === " ") {
    i--;
  }

  while (i >= 0 && str[i] !== " ") {
    count++;
    i--;
  }

  return count;
};

// by one loop
const lengthOfLastWord3 = function (s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
  }

  return count;
};
