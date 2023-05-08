/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a,b) => a-b);
  const lastNum = nums[nums.length-1];

  for(let i=0;i<nums.length;i++){
    if(nums[i]!==i){
      return i;
    }
  }
  return nums.length;
  // console.log(nums);
};
// @lc code=end
