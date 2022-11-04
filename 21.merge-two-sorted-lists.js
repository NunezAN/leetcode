/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var mergedHead = { val: -1, next: null },
    sortedList = mergedHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      sortedList.next = list2;
      list2 = list2.next;
    } else {
      sortedList.next = list1;
      list1 = list1.next;
    }
    sortedList = sortedList.next;
  }
  sortedList.next = list1 || list2;

  return mergedHead.next;
};
// @lc code=end
