/*
 * @lc app=leetcode id=2129 lang=javascript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const result = [];
  const titleArr = title.split(" ");
  for (let i = 0; i < titleArr.length; i++) {
    if (titleArr[i].length > 2) {
      result.push(
        titleArr[i][0].toUpperCase() +
          titleArr[i].slice(1, titleArr[i].length).toLowerCase()
      );
    } else {
      result.push(titleArr[i].toLowerCase());
    }
  }
  return result.join(" ");
};
// @lc code=end
