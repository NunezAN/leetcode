/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const repeatMap = new Map();
  const repeatedNums = new Set();
  for (let i = 0; i < s.length; i++) {
    if (repeatMap.has(s[i])) {
      repeatMap.delete(s[i]);
      repeatedNums.add(s[i]);
    } else {
      if (!repeatedNums.has(s[i])) {
        repeatMap.set(s[i], i);
      }
    }
  }
  const [firstValue] = repeatMap.values();

  return typeof firstValue === "number" ? firstValue : -1;
};
// @lc code=end
