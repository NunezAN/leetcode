/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const resultArr = [];

  const generateCombos = (leftP, rightP, formedP) => {
    if (leftP > rightP) return;
    if (leftP === 0 && rightP === 0) resultArr.push(formedP);
    if (leftP > 0) {
      generateCombos(leftP - 1, rightP, formedP + "(");
    }
    if (rightP > 0) {
      generateCombos(leftP, rightP - 1, formedP + ")");
    }
  };
  generateCombos(n, n, "");
  return resultArr;
};
// @lc code=end
