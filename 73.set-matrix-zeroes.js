/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zeroAdresses = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        zeroAdresses.push([r, c]);
      }
    }
  }
  const handleZero = (row, column, matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][column] = 0;
    }

    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  };
  for (let address of zeroAdresses) {
    let row = address[0];
    let column = address[1];
    handleZero(row, column, matrix);
  }
};
// @lc code=end
