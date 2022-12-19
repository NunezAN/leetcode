/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l <= r){
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) return mid

        //In the green portion of the array

        if (nums[mid] < nums[r]){
            if (target < nums[mid] || target > nums[r]){
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        //In the blue portion of the array
        else {
            if (target > nums[mid] || target < nums[l]){
                l = mid + 1
            }
            else r = mid - 1
        }

    }

    return -1
};
// @lc code=end
