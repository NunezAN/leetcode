/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sumMap = new Map();
    for(let i=0;i<nums.length;i++){
        if(sumMap.has(nums[i])){
            return [sumMap.get(nums[i]),i];
        }
        sumMap.set(target-nums[i],i);
    }
    
};
// @lc code=end

