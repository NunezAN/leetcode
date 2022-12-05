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
  let l = 0;
  let r = l + 1;

  while (r < nums.length) {
    if (nums[l] === 0) {
      r = l + 1;
      while (nums[r] === 0 && r < nums.length - 1) {
        r++;
      }
      if (nums[r] !== 0) {
        nums[l] = nums[r];
        nums[r] = 0;
      }
    }
    l++;
    r++;
  }
};
// @lc code=end
