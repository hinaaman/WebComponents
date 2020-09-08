export default class TicTacToe {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.grid = [];
    this.initializeGrid(gridSize);
  }

  initializeGrid(gridSize) {
    for (let row = 0; row < gridSize; row++) {
      this.grid[row] = [];
      for (let col = 0; col < gridSize; col++) {
        this.grid[row][col] = "*";
      }
    }
  }

  printGrid() {
    for (let row = 0; row < this.gridSize; row++) {
      console.log(this.grid[row].toString());
    }
  }

  move(player, row, col) {
    this.grid[row][col] = player;
    const isWinner = this.isWinner(player, row, col);
    if (isWinner) console.log(`Player ${player} wins!!`);
    return isWinner;
  }

  isWinner(player, playerRow, playerCol) {
    // Row
    let col;
    for (col = 0; col < this.gridSize; col++) {
      if (this.grid[playerRow][col] === player) {
        continue;
      } else {
        break;
      }
    }
    if (col === this.gridSize) {
      return true;
    }

    // Column
    let row;
    for (row = 0; row < this.gridSize; row++) {
      if (this.grid[row][playerCol] === player) {
        continue;
      } else {
        break;
      }
    }
    if (row === this.gridSize) {
      return true;
    }

    // Diagonal (from top left)
    if (playerRow === playerCol) {
      let i;
      for (i = 0; i < this.gridSize; i++) {
        if (this.grid[i][i] === player) {
          continue;
        } else {
          break;
        }
      }
      if (i === this.gridSize) {
        return true;
      }
    }

    // Diagonal (from top right)
    if (playerRow + playerCol === this.gridSize - 1) {
      let i;
      for (i = 0; i < this.gridSize; i++) {
        if (this.grid[i][this.gridSize - i - 1] === player) {
          continue;
        } else {
          break;
        }
      }
      if (i === this.gridSize) {
        return true;
      }
    }

    // To do check for draw
  }
}
