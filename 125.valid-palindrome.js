/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const phrase = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let l = 0;
  let r = phrase.length - 1;
  while (l < r) {
    if (phrase[l] !== phrase[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
// @lc code=end
