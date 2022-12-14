/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    let index = i;
    j = 0;
    while (needle[j] === haystack[index] && j < needle.length) {
      j++;
      index++;
    }
    if (needle.length === j) return i;
  }

  return -1;
};
// @lc code=end
