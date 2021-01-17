/*
478. Max Consecutive Ones II

Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

Example 1:
Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
Follow up:
What if the input numbers come in one by one as an infinite stream? In other words, you can't store all numbers coming from the stream as it's too large to hold in memory. Could you solve it efficiently?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// #1, space O(n), time O(1)
var findMaxConsecutiveOnes = function(nums) {
    let count = 0; // count longest sequence
    let left = 0;
    let right = 0;
    let zero = 0; // count first found zeroes
    
    while (right < nums.length) { // while our sliding window is in bounds
        if (nums[right] === 0) { // add the most right element into our window
            zero++;
        }
        while (zero === 2) { // if our window is invalid, contract our window
            if (nums[left] === 0) {
                zero--;
            }
            left++;
        }
        count = Math.max(count, right - left + 1); // update longest sequense
        right++; // expand our window
    } return count;
}

// #2, space O(n * n), time O(1)
var findMaxConsecutiveOnes = function(nums) {
    let count = 0; // defining the longest sequence number
    
    for (let left = 0; left < nums.length; left++) {
        let zero = 0; // define ow many zeroes do we have
        
        // check every consecutive sequence
        for (let right = left; right < nums.length; right++) {
            if(nums[right] === 0) { // count how many zeroes
                zero += 1;
            }
            if (zero <= 1) { // update count if it's valid
                count = Math.max(count, right - left + 1);
            }
        }
    } return count;
};