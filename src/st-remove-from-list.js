const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * 
 * }
 */
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
// }

 function ListNode(x) {
    this.value = x;
   this.next = null;
   return this
 }

module.exports = function removeKFromList(l, k) {
  let head = new ListNode();
  head.next = l;
  let current = head;
 while (current.next) {
  if (current.next.value === k) {
   current.next = current.next.next;
  } else {
   current = current.next;
  }
 }
   return head.next;
}
