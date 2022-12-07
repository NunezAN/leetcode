/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let prevNode = new ListNode();
  const head = prevNode;
  while (l1 != null || l2 != null || carry > 0) {
    let val1 = 0;
    let val2 = 0;
    if (l1 != null) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const result = sum % 10;
    const currentNode = new ListNode(result);
    prevNode.next = currentNode;
    prevNode = prevNode.next;
    // console.log(val1, val2, result, carry);
  }
  return head.next;
};
// @lc code=end
