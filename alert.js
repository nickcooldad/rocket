function minPath(grid, cache = new Map()) {
  let rowLength = grid.length;
  let colLength = grid[0].length;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if(i === 0 && j === 0){
      cache.set(`${i}-${j}`, dfs(grid, i, j, cache))
      }
    }
  }
  return cache.get(`${rowLength - 1}-${colLength - 1}`);
}

function dfs(grid, row, col, cache) {
  if (row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1 || cache.has(`${row}-${col}`)) {
    return ;
  }

  if (row === 0 && col === 0) {
    return grid[row][col];
  }

  let result = grid[row][col];

  result += Math.min(
    dfs(grid, row - 1, col, cache),
    dfs(grid, row + 1, col, cache),
    dfs(grid, row, col - 1, cache),
    dfs(grid, row, col + 1, cache)
  );

  cache.set(`${row}-${col}`, result);
  return result;
}



const grid = [
    [1, 2, 3, 9, 7, 2],
    [7, 2, 8, 4, 6, 6],
    [8, 1, 3, 2, 5, 3],
    [3, 3, 3, 4, 5, 1],
  ];
  
  console.log(minPath(grid))// === 20
  // [
  //   [1, 2, ×, ×, ×, ×],
  //   [×, 2, ×, ×, ×, ×],
  //   [×, 1, 3, 2, 5, 3],
  //   [×, ×, ×, ×, ×, 1],
  // ];
  