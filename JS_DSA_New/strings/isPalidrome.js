// 125. Valid Palindrome

/**
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 */

var isPalindrome = function (s) {
  let filteredStr = s.match(/[a-z0-9]/gi);
  if (!filteredStr) return true;
  filteredStr = filteredStr.join("").toLowerCase();
  let left = 0;
  let right = filteredStr.length - 1;

  while (left < right) {
    if (filteredStr[left] !== filteredStr[right]) return false;
    left++;
    right--;
  }

  return true;
};
