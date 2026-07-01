// 242. Valid Anagram

/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
 */

//  Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = function (s, t) {
    if(s.length !== t.length) return false;
    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]]) {
            sMap[s[i]]++
        } else {
            sMap[s[i]] = 1
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (tMap[t[j]]) {
            tMap[t[j]]++
        } else {
            tMap[t[j]] = 1
        }
    };

    for (let key in sMap) {
        if (sMap[key] !== tMap[key]) return false;
    };

    return true;
};

// by one map
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const map = {};
    
    // Count characters in s
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }
    
    // Subtract characters in t
    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }
    
    return true;
};