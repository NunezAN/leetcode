/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let a = Math.log(n) / Math.log(3);
  return Math.abs(a - Math.round(a)) < 1e-10;
};
// @lc code=end
