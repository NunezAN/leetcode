/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  charMapA = new Map();
  charMapB = new Map();

  for (const char of s) {
    charMapA.set(char, charMapA.get(char) + 1 || 1);
  }
  for (const char of t) {
    charMapB.set(char, charMapB.get(char) + 1 || 1);
  }

  for (const [key, valA] of charMapA) {
    valB = charMapB.get(key);
    if (valA !== valB || !charMapB.has(key)) {
      return false;
    }
  }
  return true;
};
// @lc code=end
