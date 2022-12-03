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
    let dupeSet = new Set();
    for(const num of nums){
        if(dupeSet.has(num)){
            return true;
        }
        else{
            dupeSet.add(num);
        }
    }
    return false;
};
// @lc code=end

