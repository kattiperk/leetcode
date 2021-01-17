/*
977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
// #1
var sortedSquares = function(A) {
    var result = [],
        n = A.length,
        left = 0,
        right = n - 1;
    
    for (let i = n -1; i >= 0; i--) {
        let square = 0;
        if (Math.abs(A[left]) < Math.abs(A[right])) { // compare absolute numbers
            square = A[right];
            right--; // iterate to find next greater number
        } else {
            square = A[left];
            left++;
        } result[i] = square * square;
    } return result;
};

// #2
var sortedSquares = function(A) {
    var number = [];
    for (var i = 0, len = A.length; i < len; i++) {
        number.push(Math.pow(A[i], 2)); // powering each item to square
    }
    return number.sort(function(a, b){return a-b}); // sorting in non-descending order
;}