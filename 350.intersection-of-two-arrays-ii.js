/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let intersectMap =new Map();
    let solutionArr = [];
    
    for(const num of nums1){
        intersectMap.set(num, intersectMap.get(num)+1 || 1);
    }
   
        for(const num of nums2){
            if(intersectMap.has(num) && intersectMap.get(num)>0)
                {
                    solutionArr.push(num);
                    intersectMap.set(num, intersectMap.get(num)-1)
                }
        }
    
    
    return solutionArr;
};
// @lc code=end

