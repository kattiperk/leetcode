/*
905. Sort Array By Parity

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

// #1
var sortArrayByParity = function(A) {
    let evenA = [];
    let oddA = [];
    
    for (let i = 0; i < A.length; i++) {
        if(A[i] % 2 === 0) { //if there are even in the A array, push them to the evenA array
            evenA.push(A[i]);
        } else { // if found odd push them to the oddA array
            oddA.push(A[i]);
        }
    }
    
    return [...even, ...odd]; // return combined A array
};

// #2
var sortArrayByParity = function(A) {let index = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            [A[index], A[i]] = [A[i], A[index]];
            index++;
        }
    } return A;
};