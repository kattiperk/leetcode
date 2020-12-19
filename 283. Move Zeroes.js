/*
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // #1
    if (nums == null) {
        return 0;
    }
    let n = nums.length;
    // Count zeroes
    let countZeroes = 0;
    for (let i = 0; i < n; i++) {
        countZeroes += (nums[i] == 0);
    }
    // Make all non-zero elements reatin their original order
    let outputArr = [];
    for (i = 0; i < n; i++) {
        if (nums[i] != 0) {
            outputArr.push(nums[i]);
        }
    }
    // Move all zeroes to the end
    while (countZeroes--) {
        outputArr.push(0);
    }
    // Combine the result
    for (i = 0; i < n; i++) {
        nums[i] = outputArr[i];
    }
    //----------
    // #2
 	let lastZeroIndex = 0; //last non-zero element in the array
 	// If the current element is not 0, then we need to
 	// append it just in front of last non 0 element we found. 
 	for (let i =0; i < nums.length; i++) {
        if (nums[i] != 0) {
        nums[lastZeroIndex++] = nums[i];
        }
 	}
 	// After we have finished processing new elements,
 	// all the non-zero elements are already at beginning of array.
 	// We just need to fill remaining array with 0's.
 	for (i = lastZeroIndex; i < nums.length; i++) {
 	    nums[i] = 0;
 	}
};