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
  const anagramMap = new Map();

  for (const char of s) {
    anagramMap.set(char, anagramMap.get(char) + 1 || 1);
  }

  for (const char of t) {
    if (!anagramMap.has(char)) {
      return false;
    }
    anagramMap.set(char, anagramMap.get(char) - 1);

    if (anagramMap.get(char) === 0) {
      anagramMap.delete(char);
    }
  }
  return !anagramMap.size;
};
// @lc code=end
