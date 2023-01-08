/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedStrs = strs.map((word) => word.split("").sort().join(""));
  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStrs[i]]) {
      hash[sortedStrs[i]] = [strs[i]];
    } else {
      hash[sortedStrs[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};
// @lc code=end
