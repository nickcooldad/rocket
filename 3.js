function maxArea(grid){
  let maxCount = 0
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if (grid[i][j] === 1){
       maxCount = Math.max(maxCount, dfs(grid, i, j))
      }
     }
   }
  return maxCount
}

function dfs(grid,row,col){
   if(row < 0 || row > grid.length -1 || col < 0 || col > grid[row].length -1 || grid[row][col] === 0){
    return 0;
  }

  grid[row][col] = 0

  return 1 +
  dfs(grid, row + 1, col) +
  dfs(grid, row - 1, col) +
  dfs(grid, row, col + 1) +
  dfs(grid, row, col - 1) +
  dfs(grid, row + 1, col + 1) +
  dfs(grid, row + 1, col - 1) +
  dfs(grid, row - 1, col + 1) +
  dfs(grid, row - 1, col - 1)
}

const grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,1,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0],
];

console.log(maxArea(grid)); // 4
