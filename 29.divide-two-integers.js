/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  let count = 0;
  let DivisorNegative = false;
  let DividendNegative = false;
  if (divisor < 0) DivisorNegative = true;
  divisor = DivisorNegative ? divisor * -1 : divisor;
  if (dividend < 0) DividendNegative = true;
  dividend = DividendNegative ? dividend * -1 : dividend;

  for (let i = divisor; i <= dividend; i += divisor) {
    count++;
  }
  if (DividendNegative && DivisorNegative) {
    return count;
  }
  return DivisorNegative || DividendNegative ? count * -1 : count;
};
// @lc code=end
