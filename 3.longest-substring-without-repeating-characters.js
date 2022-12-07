/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let subMap = new Map();
  let maxLen = 0;
  let front = 0;
  let back = 0;
  for (; front < s.length; front++) {
    if (subMap.has(s[front]) && back <= subMap.get(s[front])) {
      back = subMap.get(s[front]) + 1;
    }
    subMap.set(s[front], front);
    if (maxLen < front - back + 1) {
      maxLen = front - back + 1;
    }
    console.log(front, back);
  }
  return maxLen;
};
// @lc code=end
