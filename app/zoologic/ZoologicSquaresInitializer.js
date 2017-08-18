import ZoologicLevels from './ZoologicLevels';
import ZoologicSquare from './ZoologicSquare';
import Metrics from '../Metrics';

export default class ZoologicSquaresInitializer {

  constructor(levelNumber) {
    this.configDeTablero = ZoologicLevels.getLevelConfig(levelNumber);
  }

  getSquares() {
    squares = [];

    let tileSize = Metrics.TILE_SIZE;
    let startX = Metrics.ZOOLOGIC_PIECES_BAR_WIDTH + Metrics.TILE_SIZE / 2 + 20;
    let startY = Metrics.NAV_BAR_HEIGHT + Metrics.TILE_SIZE / 2 + 50;
    let squareNumber = 0;

    for (i = startX; i <= startX + 4 * tileSize; i = i + tileSize) {
      for (j = startY; j <= startY + 4 * tileSize; j = j + tileSize) {
        let square = this.getSquare(squareNumber, j, i, squares);
        squares.push(square);
        squareNumber++;
      }
    }

    return squares;
  }

  getSquare(squareNumber, i, j, squares) {
    let type = this.getType(squareNumber);
    return new ZoologicSquare(i, j, type, squareNumber, squares);
  }



  getType(squareNumber) {
    switch (this.configDeTablero.squares.charAt(squareNumber)) {
      case 'R':
        return 'red';
      case 'G':
        return 'green';
      case 'B':
        return 'blue';
      case 'P':
        return 'purple';
      case 'Y':
        return 'yellow';
      case 'C':
        return 'cyan';
      case 'A':
        return 'gray';
      case 'W':
        return 'white';
      default:
        return 'black';
    }
  }
}


