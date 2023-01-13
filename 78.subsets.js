/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      console.log(result);
      return;
    }
    dfs(i + 1, nums, slate);

    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };
  dfs(0, nums, []);
  return result;
};
// @lc code=end
