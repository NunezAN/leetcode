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
  let found = null;
  const numsMap = new Map();
  for (let num of nums) {
    numsMap.set(num, numsMap.get(num) + 1 || 1);
  }
  
  for(let [key, val] of numsMap){
    if(val ===1){
      return key;
    }
  }
};
// @lc code=end
