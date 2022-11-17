/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let maxDepth = 0;
  const dig = (root, depth) => {
    if (root === null) return;
    if (depth > maxDepth) {
      maxDepth = depth;
    }
    dig(root.left, depth + 1);
    dig(root.right, depth + 1);
  };
  dig(root, 1);
  return maxDepth;
};

// @lc code=end
