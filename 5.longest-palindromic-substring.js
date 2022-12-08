/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let longest = "";

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const sub = s.substring(i, j);
      //   console.log(sub);
      let l = 0;
      let r = sub.length - 1;
      let palindrome = true;
      while (l < r) {
        // console.log(sub[l], sub[r]);
        if (sub[l] !== sub[r]) {
          palindrome = false;
          break;
        }
        l++;
        r--;
      }
      if (palindrome) {
        if (sub.length > longest.length) {
          longest = sub;
        }
        // console.log(longest);
      }
    }
  }
  return longest;
};
// @lc code=end
