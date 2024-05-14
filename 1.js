
// function minPath(grid) {
//   const rowLength = grid.length;
//   const colLength = grid[0].length;
  
//   const dp = Array.from({length : rowLength}, () => Array.from({length : colLength}))
//   dp[0][0] = grid[0][0];
  
//   for (let col = 1; col < colLength; col++) {
//     dp[0][col] = dp[0][col - 1] + grid[0][col];
//   }
  
//   for (let row = 1; row < rowLength; row++) {
//     dp[row][0] = dp[row - 1][0] + grid[row][0];
//     for (let col = 1; col < colLength; col++) {
//       dp[row][col] = grid[row][col] + Math.min(dp[row - 1][col], dp[row][col - 1]);
//     }
//   }
//   return dp[rowLength - 1][colLength - 1];
// }




function minPath(grid, row = grid.length - 1, col = grid[0].length - 1, dp = Array.from({length: grid.length}, () => Array.from({length: grid[0].length}))) {
  if (row < 0 || col < 0){
    return Infinity;
  }
  if (row === 0 && col === 0){
   return grid[row][col];
  }
  if(dp[row][col] !== undefined){
    return dp[row][col]
  }
  dp[row][col] = grid[row][col] + Math.min(
    minPath(grid, row - 1, col, dp),
    minPath(grid, row, col - 1, dp),
  );

  return dp[row][col]
}



// const grid = [
//     [1, 2, 3, 9, 7, 2],
//     [7, 2, 8, 4, 6, 6],
//     [8, 1, 3, 2, 5, 3],
//     [3, 3, 3, 4, 5, 1],
//   ];

const grid = Array(50).fill(Array(50).fill(1))
  
  console.log(minPath(grid))// === 20
  // [
  //   [1, 2, ×, ×, ×, ×],
  //   [×, 2, ×, ×, ×, ×],
  //   [×, 1, 3, 2, 5, 3],
  //   [×, ×, ×, ×, ×, 1],
  // ];