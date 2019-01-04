/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/


var longestPalindrome = function (s) {
  let max = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i
      let right = i + j
      if (right === s.length) break;
      while (left >= 0 && s[left] === s[right]) {
        left--
        right++
      }
      if (right - left - 1 > max.length) max = s.substring(left + 1, right)
    }
  }
  return max
};

longestPalindrome('abcba')

/* Approach
  1. Step 1: two nested for loop i, j. (j is max one step ahead of i or j < 2)
  2. Step 2: left, right pointer inside nested loop.
              left & right: point to the same element initially
              if str[left] = str[right] loop to check element outside of both ends
              set max by length
  3. Step 3: j++, moves right one step over & repeat step 2
  4. After those loops, return max
*/