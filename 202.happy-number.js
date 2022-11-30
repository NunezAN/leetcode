/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set();
  let sum = 0;
  const start = String(n).split("");
  for (const num of start) {
    sum += num * num;
  }
  while (sum != 1) {
    if (seen.has(sum)) {
      return false;
    } else {
      seen.add(sum);
    }
    const stringNum = String(sum).split("");
    sum = 0;
    for (const num of stringNum) {
      sum += num * num;
    }
  }
  return true;
};
// @lc code=end
