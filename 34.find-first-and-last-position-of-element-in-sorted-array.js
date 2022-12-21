/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const resultArr = [];
  const leftMost = (nums, target) => {
    console.log(nums);
    let index = -1;
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) {
        index = mid;
        r = mid - 1;
      } else if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return index;
  };
  const rightMost = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
    let index = -1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) {
        index = mid;
        l = mid + 1;
      } else if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return index;
  };
  resultArr.push(leftMost(nums, target));
  resultArr.push(rightMost(nums, target));
  return resultArr;
};
// @lc code=end
