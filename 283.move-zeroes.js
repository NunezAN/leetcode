/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero] = nums[i];
      lastNonZero++;
    }
  }

  for (let i = nums.length - 1; i >= lastNonZero; i--) {
    nums[i] = 0;
  }
};
// @lc code=end
