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
  const strsSorted = strs.map((str) => str.split("").sort().join(""));
  let hash = {};

  for (let i = 0; i < strs.length; i++) {
    if (!hash[strsSorted[i]]) {
      hash[strsSorted[i]] = [strs[i]];
    } else {
      hash[strsSorted[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};
// @lc code=end
