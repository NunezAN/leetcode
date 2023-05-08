/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numMap = new Map();
    for(let num of nums){
        if(numMap.has(num)){
            return true;
        }
        numMap.set(num, true);
    }
    return false;

};
// @lc code=end

