/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
            console.log(nums);
        }
    }
    return ++i;
    
};
// @lc code=end

