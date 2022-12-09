/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648)
};
// @lc code=end

