/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const missingSet = new Set();
  for (const num of nums) {
    missingSet.add(num);
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!missingSet.has(i)) {
      return i;
    }
  }
  return null;
};
// @lc code=end
