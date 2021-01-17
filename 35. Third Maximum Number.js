/*
35. Third Maximum Number

Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.


Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 

Constraints:

1 <= nums.length <= 104
231 <= nums[i] <= 231 - 1
 

Follow up: Can you find an O(n) solution?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = -Infinity, mid = -Infinity, min = Infinity; // declaring 1st, 2nd, 3rd max numbers
    
    for (let num of nums) {
        if (num > max) {
            min = mid;
            mid = max;
            max = num;
        } else if (num > mid && num < max) {
            min = mid;
            mid = num;
        } else if (num > min && num < mid) {
            min = num;
        }
    } return (min > -Infinity) ? min : max;
};