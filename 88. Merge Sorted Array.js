/*
88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
 

Constraints:

-10^9 <= nums1[i], nums2[i] <= 10^9
nums1.length == m + n
nums2.length == n
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let a = m - 1,
        b = n - 1,
        c = m + n - 1;
    
    while (a >= 0 && b >= 0) {
        if (nums1[a] > nums2[b]) {
            nums1[c--] = nums1[a--]; 
        }
        else {
            nums1[c--] = nums2[b--];
        }
    }
    while (a >= 0) {
        nums1[c--] = nums1[a--]
    }
    while(b >= 0) {
        nums1[c--] = nums2[b--]
    }
}