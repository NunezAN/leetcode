/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = [];
  const nodeValues = [];

  if (root === null) {
    return nodeValues;
  }
  let current = root;
  while (current != null || stack.length) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    nodeValues.push(current.val);
    current = current.right;
  }

  return nodeValues;
};
// @lc code=end
