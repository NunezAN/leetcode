/*
 * @lc app=leetcode id=2022 lang=javascript
 *
 * [2022] Convert 1D Array Into 2D Array
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) return [];
  const resultArr = new Array(m);
  for (let i = 0; i < m; i++) {
    resultArr[i] = new Array(n);
  }
  //console.log(resultArr);
  let originalIndex = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //console.log(resultArr,original[originalIndex])
      resultArr[i][j] = original[originalIndex];
      originalIndex += 1;
    }
  }
  return resultArr;
};
// @lc code=end
