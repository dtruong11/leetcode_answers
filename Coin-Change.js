/*
You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1

*/


// F(S) = F(S - C) + 1; C: last coin value
/* 
  1. Bottom up: find min combinations for all amount adding up to targeted value 
  2. Store these results in an array 
*/

const cointChange = (coins, num) => {
  let count = new Array(num + 1).fill(Number.MAX_VALUE)
  count[0] = 0
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < coins.length; j++) {
      count[i] = Math.min(count[i], count[i - coins[j]] + 1) // reuse values already calculated in count arr
    }
  }
  return count[num] === Number.MAX_VALUE ? -1 : count[num]
}