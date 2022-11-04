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
    let targetMap = new Map();
    for(let i=0;i<nums.length;i++) {
        if(targetMap.has(nums[i])){
            return [targetMap.get(nums[i]),i];
        }
        targetMap.set(target-nums[i],i);
    }
    
};
// @lc code=end

