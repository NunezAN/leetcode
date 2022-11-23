/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.delete(num);
    }
  }
  const [firstKey] = map.keys();
  return firstKey;
};
// @lc code=end
