import RushHourPiece from '../app/rush-hour/model/RushHourPiece';
import RushHourBoard from '../app/rush-hour/model/RushHourBoard';
import Metrics from '../app/Metrics';

describe('RushHourPiece Test', () => {

  describe('#creation', () => {
    let id = 'an id';
    let xCoord = 2;
    let yCoord = 3;
    let widthInTiles = 22;
    let heightInTiles = 33;
    let board = new RushHourBoard(Metrics.RUSH_HOUR_DIMENSIONS);

    cuadradito = new RushHourPiece(id, xCoord, yCoord, widthInTiles, heightInTiles, board);

    test('it has an id', () => {
      expect(cuadradito.id).toEqual(id);
    });

    describe('#creation', () => {

      test('has an initial position in X equivalent to the board size and the x coordinate', () => {
        expect(cuadradito.x).toEqual(xCoord * board.tileSize);
      });

      test('has an initial position in Y equivalent to the board size and the y coordinate', () => {
        expect(cuadradito.y).toEqual(yCoord * board.tileSize);
      });
    });

    test('has a width proportional to the width of a single tile', () => {
      expect(cuadradito.width).toEqual(widthInTiles * board.tileSize);
    });

    test('has a height proportional to the height of a single tile', () => {
      expect(cuadradito.height).toEqual(heightInTiles* board.tileSize);
    });

    test('knows the board it belongs to', () => {
      expect(cuadradito.board).toEqual(board);
    });


  });
});

