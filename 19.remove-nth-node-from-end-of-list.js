/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var returnNode = new ListNode(null);
  returnNode.next = head;
  let slow = returnNode;
  let fast = returnNode;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return returnNode.next;
};
// @lc code=end
