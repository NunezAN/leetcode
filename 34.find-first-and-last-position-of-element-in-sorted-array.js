/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let start;
    if (nums[i] === target) {
      start = i;
      if (nums[start] != nums[start + 1] || start === nums.length) {
        return [start, start];
      }
      let end = i;
      while (end < nums.length) {
        if (nums[end] !== target) {
          break;
        }
        end++;
      }
      return [start, end - 1];
    }
  }
  return [-1, -1];
};
// @lc code=end
