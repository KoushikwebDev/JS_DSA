//

/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
 */

const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    let ch = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== ch || i >= strs[j].length) return prefix; // here checking the char and also checking the if i index is not greater than the element's length
    }

    prefix += ch;
  }

  return prefix;
};
