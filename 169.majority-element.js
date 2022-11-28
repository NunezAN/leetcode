/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const majorityMap = new Map();
  for (const num of nums) {
    majorityMap.set(num, majorityMap.get(num) + 1 || 1);
    if (majorityMap.get(num) > nums.length / 2) {
      return num;
    }
  }
  return null;
};
// @lc code=end
