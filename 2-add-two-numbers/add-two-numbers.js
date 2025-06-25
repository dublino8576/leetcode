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
var addTwoNumbers = function(l1, l2) {
    //invert the lists and join the digits, then sum the two numbers and make a new linked list with numbers inverted again
    //linked lists are arrays but they are actually linked objects that are not iterable like normal arrays
    //they are written as follows const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
    //equals 342 with null meaning end of list, value key and nested object called next

    //USE WHILE LOOP: it does not require for object to be iterable, it only runs as long as condition is TRUE.
    //CONDITION= node.next !== null, will run until the last nested object and can insert the values inside a new array.
    //while loop converts linked list into an array that can be iterated through
    /*let l1Iterable = []
    let l2Iterable = []
    while (l1 !== null) {
        
        l1Iterable.push(l1.val)
        l1 = l1.next //moves the loop in the next node/ nested object of linked list
    }
const reversedL1 = l1Iterable.reverse() //now it can be reversed
    while (l2 !== null) {
        l2Iterable.push(l2.val)
        l2 = l2.next 
    }
const reversedL2 = l2Iterable.reverse()
////////////////////////NOW: sum the two numbers

const total = (Number(reversedL2.join("")) + Number(reversedL1.join("")))
const totalArray = total.toString().split("").map(Number)
console.log(totalArray)
////////////////////////Use array of sum of two numbers to convert it to linked list [8,0,7]
let next = null
for (let i = 0; i < totalArray.length; i++ ) {
    next = new ListNode(totalArray[i], next); 
    
}
//does not create a plain object but creates a linked list with its properties, this gives the output of [7,0,8] which represents a linked list and not an iterable array
//solution is not valid for serial long numbers as above a certain limit some zeros get lost and the toString() becomes inaccurate changing it to NaN
return next*/

//////// Actual solution
// create a while loop that checks each node of the linked list and runs while at least one of the lists exists at the current node
//create a new solution linked list that has a current variable to insert each node into solution
//if sum of numbers in the node are bigger than 9 we carry 1, otherwise we carry 0
//create current.next new listnodes and make sure they become the new current so that we can keep adding new nodes after that
//make sure after adding it to solution you move the while loop forward by changing the value of the node by doing node = node.next 
//return solution.next which will be all the nodes we added except the 0 with which we initialised at the beginning
let node1 = l1
let node2 = l2
let solution = new ListNode(0)
let current = solution
let carry = 0
let num1 = 0
let num2 = 0
while (node1 || node2) {
    num1 = node1 ? node1.val : 0
    num2 = node2 ? node2.val : 0
    if (num1 + num2 + carry > 9) {
        current.next = new ListNode(num1 + num2 + carry - 10)
        current = current.next
        carry = 1
    } else {
        current.next = new ListNode(num1 + num2 + carry)
        current = current.next
        carry = 0
    }
    if (node1) node1 = node1.next
    if (node2) node2 = node2.next

}
if (carry) {
    current.next = new ListNode(carry)
}
return solution.next
};