function dfs(board, row, col, index, word){
  if (index === word.length){
    return true
  }
  if(row < 0 || row > board.length - 1 || col < 0 || col > board[row].length - 1 || word[index] !== board[row][col] || board[row][col] === ''){
    return false;
  }

  let memory = board[row][col]
  board[row][col] = ''

  let result = dfs(board, row + 1, col , index + 1, word) ||
  dfs(board, row - 1, col, index + 1, word) ||
  dfs(board, row, col + 1, index + 1, word) ||
  dfs(board, row, col - 1, index + 1, word) ||
  dfs(board, row + 1, col + 1, index + 1, word) ||
  dfs(board, row + 1, col - 1, index + 1, word) ||
  dfs(board, row - 1, col + 1, index + 1, word) ||
  dfs(board, row - 1, col - 1, index + 1, word)
  
  board[row][col] = memory
   
  return result
  }

  function checkWord(board, word) {
    let checkWords = false
      for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
          if(word[0] === board[i][j]){
            if(dfs(board, i, j, 0, word)){
              checkWords = true
            }
          }
        }
      }
    return checkWords
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