/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; ++i) {
    let row = new Set(), col = new Set(), cub = new Set();
    let rowIdx = 3*(parseInt(i/3)), colIdx = 3*(parseInt(i%3));
    for (let j = 0; j < 9; ++j) {
        if (board[i][j] != '.' && row.has(board[i][j])) return false;
        row.add(board[i][j]);
        if (board[j][i] != '.' && col.has(board[j][i])) return false;
        col.add(board[j][i]);
        if (board[rowIdx+parseInt(j/3)][colIdx+parseInt(j%3)] != '.' && cub.has(board[rowIdx+parseInt(j/3)][colIdx+parseInt(j%3)])) return false;
        cub.add(board[rowIdx+parseInt(j/3)][colIdx+parseInt(j%3)]);
    }
}
return true;
};
// @lc code=end
