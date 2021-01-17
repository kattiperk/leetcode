/*
448. Find All Numbers Disappeared in an Array
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numsSet = new Set(nums);
    let newNums = []; // new output array
    var i = nums.length;
    while (i) {
        numsSet.has(i--) || newNums.push(i + 1); // check if numsSet has all numbers
    } return newNums; // if missing exist, return it (missing will be the next from the found item)
};