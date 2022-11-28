/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;

    let aPointer = headA;
    let bPointer = headB;

    while(aPointer != bPointer)
    {
        if(aPointer === null){
            aPointer= headB;
        }
        else{
            aPointer = aPointer.next;
        }
        if(bPointer === null ){
            bPointer = headA;
        }
        else{
            bPointer = bPointer.next;
        }
    }
    return aPointer;
    
};
// @lc code=end

