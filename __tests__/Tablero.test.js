import Cuadradito from '../app/rush-hour/model/Cuadradito';
import Tablero from '../app/rush-hour/model/Tablero';
import Metrics from '../app/Metrics';

describe('Tablero Test', () => {


  describe('#creation', () => {
    const boardWidth = Metrics.BOARD_WIDTH;
    const boardHeight = Metrics.BOARD_HEIGHT;
    let board = new Tablero(Metrics.RUSH_HOUR_DIMENSIONS);

    test('it has a width', () => {
      expect(board.width).toEqual(boardWidth);
    });

    test('it has a height', () => {
      expect(board.height).toEqual(boardHeight);
    });

    test('it knows the size of the tiles', () => {
      expect(board.tileSize).toEqual(Metrics.TILE_SIZE);
    });

    test('it knows the maximum space in between the tiles', () => {
      expect(board.maxSpaceInBetweenTiles).toEqual(Metrics.MAX_SPACE_IN_BETWEEN_TILES);
    });

  });
});

