/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const table = Array.from({ length: m }, () => new Array(n));
  for (let i = 0; i < table.length; i++) {
    table[i][0] = 1;
  }
  for (let i = 0; i < table[0].length; i++) {
    table[0][i] = 1;
  }
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      table[i][j] = table[i][j - 1] + table[i - 1][j];
    }
  }
  console.log(table);
  return table[m - 1][n - 1];
};
// @lc code=end
