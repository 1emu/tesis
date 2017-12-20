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

    area = new RushHourPiece(id, xCoord, yCoord, widthInTiles, heightInTiles, board);

    test('it has an id', () => {
      expect(area.id).toEqual(id);
    });

    describe('#creation', () => {

      test('has an initial position in X equivalent to the board size and the x coordinate', () => {
        expect(area.x).toEqual(xCoord * board.tileSize);
      });

      test('has an initial position in Y equivalent to the board size and the y coordinate', () => {
        expect(area.y).toEqual(yCoord * board.tileSize);
      });
    });

    test('has a width proportional to the width of a single tile', () => {
      expect(area.width).toEqual(widthInTiles * board.tileSize);
    });

    test('has a height proportional to the height of a single tile', () => {
      expect(area.height).toEqual(heightInTiles* board.tileSize);
    });

    test('knows the board it belongs to', () => {
      expect(area.board).toEqual(board);
    });


  });
});

