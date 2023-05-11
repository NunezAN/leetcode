/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1] += 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 9 && i !== 0) {
      digits[i] = 0;
      digits[i - 1] += 1;
    } else if (i === 0 && digits[i] > 9) {
      //console.log(digits[i], digits);
      digits[i] = 0;
      digits = [1, ...digits];
     // console.log(digits[i], digits);
    }
  }
  return digits;
};
// @lc code=end
