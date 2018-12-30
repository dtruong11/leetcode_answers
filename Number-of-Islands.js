/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Example 1:
11110
11010
11000
00000
Answer: 1

Example 2:
11000
11000
00100
00011
Answer: 3
*/

const numIslands = (grid) => {
  let len = grid.length, 
  len1 = grid[0].length, 
  result = 0
  if (len === 0 || len1 === 0) return result
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === '1') {
        result++ // encounter an island, count++
        dfs(grid, i, j, len, len1) // turn all its neighbors into 0s 
      }
    }
  }
  return result
}

//
const dfs = (grid, i, j, len, len1) => {
  if (i >= len || j >= len1 || i < 0 || j < 0) return 
  if (grid[i][j] === '1') {
    grid[i][j] = '0' // signal visited 
    dfs(grid, i - 1, j, len, len1) // b: neighbor of vertice a, check all neighbors of b
    dfs(grid, i + 1, j, len, len1)
    dfs(grid, i, j - 1, len, len1)
    dfs(grid, i, j + 1, len, len1)
  }
}