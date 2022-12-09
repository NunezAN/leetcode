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
  let maxSub = "";
  const getPalindrome = (left, right, s) => {
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;
      left--;
      right++;
    }
    return (s.substring(left+1,right))
  };
  for (let i = 0; i < s.length; i++) {
    const odd = getPalindrome(i - 1, i + 1, s);
    const even = getPalindrome(i, i + 1, s);
    const curMax = odd.length > even.length ? odd : even;
    maxSub = curMax.length > maxSub.length ? curMax : maxSub;
  }
  return maxSub;
};
// @lc code=end
