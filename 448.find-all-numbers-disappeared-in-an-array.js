/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
//   nums.sort((a, b) => a - b);
  const numsSet = new Set(nums);
  // console.log(numsSet);
  // console.log(nums)
  let returnArray = [];
  for (let i = 0; i < nums.length; i++) {
    //console.log(i);
    if (!numsSet.has(i + 1)) {
      returnArray.push(i + 1);
    }
  }
  return returnArray;
};
// @lc code=end
