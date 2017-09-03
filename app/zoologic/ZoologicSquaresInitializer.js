import ZoologicLevels from './ZoologicLevels';
import ZoologicSquare from './ZoologicSquare';
import ZoologicPieceTypeGenerator from './ZoologicPieceTypeGenerator'
import ZooologicBoard from './ZoologicBoard'

const MAX_SQUARES_IN_BOARD = 5;
const MATRIX_SIZE = MAX_SQUARES_IN_BOARD * 2;

export default class ZoologicSquaresInitializer {
  constructor(levelNumber) {
    this.configDeTablero = ZoologicLevels.getLevelConfig(levelNumber);
  }

  getBoard() {
    let board = new ZooologicBoard();

    for (let y = 0; y < MATRIX_SIZE; y = y + 1) {
      for (let x = 0; x < MATRIX_SIZE; x = x + 1) {
        if (this.matrixPositionAvailable(x, y, board) && this.typeDefinedForPosition(x, y)) {
          board.addSquare(this.getSquare(x, y, board));
        }
      }
    }

    return board;
  }

  getSquare(x, y, board) {
    let type = this.getType(x, y);
    return new ZoologicSquare(x, y, type, board);
  }

  getType(x, y) {
    switch (this.getRawType(x, y)) {
      case 'M':
        return ZoologicPieceTypeGenerator.MOUSE();
      case 'C':
        return ZoologicPieceTypeGenerator.CAT();
      case 'D':
        return ZoologicPieceTypeGenerator.DOG();
      case 'B':
        return ZoologicPieceTypeGenerator.BULLDOG();
      case 'F':
        return ZoologicPieceTypeGenerator.FISH();
      case 'H':
        return ZoologicPieceTypeGenerator.CHEESE();
      case 'O':
        return ZoologicPieceTypeGenerator.BONE();
      case 'L':
        return ZoologicPieceTypeGenerator.BULL();
      case 'A':
        return ZoologicPieceTypeGenerator.ANTS();
      case 'X':
        return ZoologicPieceTypeGenerator.BLANK();
    }
  }

  getRawType(x, y) {
    return this.configDeTablero.squares.charAt(x + y * MATRIX_SIZE);
  }

  typeDefinedForPosition(x, y) {
    return this.getRawType(x, y) !== '-'
  }

  matrixPositionAvailable(x, y, board) {
    return !board.squares.some((square) => { return square.occupies(x, y) })
  }
}


