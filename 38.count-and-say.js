/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = "1";
  while (n-- > 1) {
    let next = "";
    let count = 1;
    let current = result[0];
    for (let i = 1; i < result.length + 1; i++) {
      if (result[i] !== current) {
        next += `${count}${current}`;
        current = result[i];
        count = 1;
      } else {
        count++;
      }
    }
    result = next;
    console.log(result);
  }
  return result;
};
// @lc code=end
