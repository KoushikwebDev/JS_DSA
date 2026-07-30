// 392. Is Subsequence

/**
 Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 */



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


const isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    };

    return i === s.length;
};