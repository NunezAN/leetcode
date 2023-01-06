/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let result = Array(matrix[0].length)
    .fill()
    .map(() => Array(matrix.length).fill(0));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      result[col][row] = matrix[row][col];
    }
  }
  return result;
};
// @lc code=end
