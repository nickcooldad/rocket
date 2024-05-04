function dfs(grid,row,col){
  if(row < 0 || row > grid.length -1 || col < 0 || col > grid[row].length -1 || grid[row][col] === 0){
    return;
  }

  grid[row][col] = 0

  dfs(grid, row + 1, col)
  dfs(grid, row - 1, col)
  dfs(grid, row, col + 1)
  dfs(grid, row, col - 1)
  dfs(grid, row + 1, col + 1)
  dfs(grid, row + 1, col - 1)
  dfs(grid, row - 1, col + 1)
  dfs(grid, row - 1, col - 1)

  return 1
}

function countIslands(grid){
    let count = 0
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        if (grid[i][j] === 1){
          count += dfs(grid, i, j)
        }
      }
    }
  
  return count
  }