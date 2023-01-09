/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  largestSum = nums[0];
  cache = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    cache.push(nums[i]);
    cache[i] = Math.max(cache[i], cache[i] + cache[i - 1]);
    largestSum = Math.max(largestSum, cache[i]);
  }
  return largestSum;
};
// @lc code=end
