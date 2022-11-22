/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let maxprofit = 0;
  let l = 0;
  let r = 1;

  while (r < prices.length) {
    const profit = prices[r] - prices[l];
    if (maxprofit < profit) {
      console.log("max profit", profit);
      maxprofit = profit;
    } else if (profit < 0) {
      l = r;
    }
    r = r + 1;
  }
  return maxprofit;
};
// @lc code=end
