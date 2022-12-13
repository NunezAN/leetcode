/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length ===0) return [];
    const result = [];
    const alpha = {
    '2': "abc",
    '3': "def",
    '4': "ghi",
    '5': "jkl",
    '6': "mno",
    '7': "pqrs",
    '8': "tuv",
    '9': "wxyz",
  };

  const recursiveTree = (i, digits, slate) => {
    if(i === digits.length){
        result.push(slate.join(""))
        return;
    }
    let chars = alpha[digits[i]];
    for(let char of chars){
        slate.push(char);
        recursiveTree(i+1,digits, slate);
        slate.pop();
    }
  }
  recursiveTree(0,digits,[]);
  return result;

};
// @lc code=end
