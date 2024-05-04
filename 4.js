function dfs(board, row, col, index, word){
  if (index === word.length){
    return true
  }
  if(row < 0 || row > board.length - 1 || col < 0 || col > board[row].length - 1 || word[index] !== board[row][col] || board[row][col] === ''){
    return false;
  }

  let memory = board[row][col]
  board[row][col] = ''
  let result = [[row - 1,col], [row + 1, col], [row,col + 1], [row,col - 1], [row - 1,col - 1], [row - 1,col + 1], [row + 1,col - 1], [row + 1,col + 1]]
    .some(([row, col]) => dfs(board, row, col, index +1, word))
  board[row][col] = memory
   
  return result
  }

function checkWord(board, word) {
  for(let i = 0; i < board.length; i++){
     for(let j = 0; j < board[i].length; j++){
      if(dfs(board, i, j, 0, word)){
        return true
      }
    }
  }
  return false
}

  const board = [ 
    ["I","L","A","W"],
    ["B","N","G","E"],
    ["I","U","A","O"],
    ["A","S","R","L"],
  ];
    
    console.log(checkWord(board, 'BINGO'))
    console.log(checkWord(board, 'ILNBIA'))
    console.log(checkWord(board, 'BUNGIE'))