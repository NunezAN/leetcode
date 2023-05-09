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
  let maxProfit = 0;
  let buy = 0;
  let sell = 0;
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return maxProfit;
};
// @lc code=end
