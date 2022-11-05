/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 1;
    let r = Math.floor(x/2)+1;
    var mid;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        console.log(l,r,mid);
        if((mid * mid) < x)
        {
            l=mid+1;
        }
        else if((mid * mid) > x){
            r=mid-1;
        }
        else{
            return mid;
        }
    }
    return r;
};
// @lc code=end

