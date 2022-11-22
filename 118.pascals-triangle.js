/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return[[1]];

  const triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    const curRow = [];
    curRow.push(1);
    for (j = 1; j < prevRow.length; j++) {
      curRow.push(prevRow[j - 1] + prevRow[j]);
    }
    curRow.push(1);
    triangle.push(curRow);
  }
  return triangle;
};
// @lc code=end
