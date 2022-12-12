/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
  let l = 0;
  let r = heights.length - 1;
  let most = 0;
  while (l < r) {
    let width = r - l;
    let height = Math.min(heights[r], heights[l]);
    let area = width * height;
    if (most < area) {
      most = area;
    }
    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return most;
};
// @lc code=end
