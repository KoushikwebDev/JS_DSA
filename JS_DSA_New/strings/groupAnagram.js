// 49. Group Anagrams

/**
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 */

const groupAnagrams = function (strs) {
  const sortedStrs = strs.map((item) => item.split("").sort().join(""));
  const map = {};
  for (let i = 0; i < sortedStrs.length; i++) {
    map[sortedStrs[i]] = [];
  }

  for (let j = 0; j < strs.length; j++) {
    const ele = strs[j];
    const sortEle = ele.split("").sort().join("");
    map[sortEle].push(ele);
  }

  return Object.values(map);
};

// one pass
const groupAnagrams2 = function (strs) {
  const map = {};

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};

// by hashing the character count
const groupAnagrams3 = function (strs) {
  const map = {};

  for (const str of strs) {
    const count = new Array(26).fill(0);

    // looping through the every string to fill the count arr
    for (const ch of str) {
      count[ch.charCodeAt(0) - 97]++;
      // a => 97, b => 98, c => 99, d => 100, e => 101, f => 102, g => 103, h => 104, i => 105, j => 106, k => 107, l => 108, m => 109, n => 110, o => 111, p => 112, q => 113, r => 114, s => 115, t => 116, u => 117, v => 118, w => 119, x => 120, y => 121, z => 122
    }

    // creating a key from the count array to use it as a key in the map
    const key = count.join("#");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};
