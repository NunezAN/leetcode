/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stringStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stringStack.push(")");
    } else if (s[i] === "{") {
      stringStack.push("}");
    } else if (s[i] === "[") {
      stringStack.push("]");
    } else if (s[i] !== stringStack.pop()) {
      return false;
    }
  }
  return stringStack.length === 0;
};
// @lc code=end
