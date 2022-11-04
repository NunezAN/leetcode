/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  for(let i =0 ;i<strs[0].length;i++){
    if(strs[0][i]!==strs[strs.length-1][i])return strs[0].substring(0,i);
  }
  return strs[0];
};
// @lc code=end
