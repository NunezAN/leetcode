/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const search = (row, col, index) => {
    if (index === word.length) {
      return true;
    }
    if (
      row >= board.length ||
      row < 0 ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    board[row][col] = "#";
    console.log(board, index);
    if (
      search(row + 1, col, index + 1) ||
      search(row, col + 1, index + 1) ||
      search(row - 1, col, index + 1) ||
      search(row, col - 1, index + 1)
    ) {
      return true;
    }
    board[row][col] = word[index];
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && search(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
