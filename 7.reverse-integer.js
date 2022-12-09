/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const limit = 2147483648;
  const stringInt = x.toString();
  let resultNum = "";
  for (const num of stringInt) {
    resultNum = num + resultNum;
  }
  return parseInt(resultNum) > limit
    ? 0
    : x > 0
    ? parseInt(resultNum)
    : parseInt(resultNum) * -1;
};
// @lc code=end
