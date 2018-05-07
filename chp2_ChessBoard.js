// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

function chess (size){
  let board = "";
  for(let row = 0; row < size; row++){
    for(let col = row; col < size + row; col++){
      if(col % 2 !== 0) board += "#";
      else board += " ";
    }
    board +="\n"
  }
  console.log(board);
}

chess(8)

function chessBoard(rows, columns){
  let board = "";
  for(let  currentRow = 0; currentRow < rows; currentRow++){
    for(let currentCol = currentRow; currentCol < columns + currentRow; currentCol++){
      if(currentCol % 2 !== 0) board += "#";
      else board += " ";
    }
    board += "\n"
  }
  console.log(board);
}

chessBoard(8, 8);
