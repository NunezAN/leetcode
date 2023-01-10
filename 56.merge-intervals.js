/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];

  for (let interval of intervals) {
    let e1 = result[result.length - 1][1];
    let s2 = interval[0];
    let e2 = interval[1];

    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(interval);
    }
  }

  return result;
};
// @lc code=end
