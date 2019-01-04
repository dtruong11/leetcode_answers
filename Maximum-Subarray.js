/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
// Solution 1: 
var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    max = Math.max(currentMax, max);
  }
  return max;
};

// Solution 2: 
const maxSubArray2 = (nums) => {
  let obj = { 0: nums[0] }
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    obj[i] = Math.max(nums[i], obj[i - 1] + nums[i]) // compare previous sum to current value in nums
    max = Math.max(obj[i], max) // compare max current max to previous max 
  }
  return max
}

// Solution 3: Change nums array into max current sum at each index
const maxSubArray3 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
  }
  return Math.max(...nums)
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])