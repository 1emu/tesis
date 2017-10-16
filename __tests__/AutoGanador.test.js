import Tablero from '../app/rush-hour/model/Tablero';
import AutoGanador from "../app/rush-hour/model/WinningCar";
import CarImage from "../app/rush-hour/img/CarImages";
import Metrics from '../app/Metrics';

describe('WinningCar', () => {
    describe('#creation', () => {
        let id = 'an id';
        let xCoord = 2;
        let yCoord = 3;
        let board = new Tablero(Metrics.RUSH_HOUR_DIMENSIONS);
        auto = new AutoGanador(id, xCoord, yCoord, board);
        board.ubicarVehiculos([auto]);

        describe('#creation', () => {
         test('it has an id', () => {
             expect(auto.id).toEqual(id);
         });

        test('has an initial position in X equivalent to the board size and the x coordinate', () => {
            expect(auto.x).toEqual(xCoord * board.tileSize);
        });

        test('has an initial position in Y equivalent to the board size and the y coordinate', () => {
            expect(auto.y).toEqual(yCoord * board.tileSize);
        });

         test('has a width proportional to the width of a 2 tiles', () => {
             expect(auto.width).toEqual(2 * board.tileSize);
         });

         test('has a height proportional to the height of a single tile', () => {
             expect(auto.height).toEqual(board.tileSize);
         });

         test('knows the board it belongs to', () => {
             expect(auto.tablero).toEqual(board);
         });

         test('its image is a red car', () => {
             expect(auto.image).toEqual(CarImage.for('car', 'red', 'right'));
         });
        });

        describe('pushing car', () => {
            test('it moves the car horizontally to the new position', () => {
                newPosX = xCoord * board.tileSize + 10;
                newPosY = yCoord * board.tileSize;
                auto.pushTowards(newPosX, newPosY);

                expect(auto.x).toEqual(newPosX);
                expect(auto.y).toEqual(newPosY);
            });

            test('it cannot be moved vertically', () => {
                newPosX = xCoord * board.tileSize;
                newPosY = yCoord * board.tileSize + 10;
                auto.pushTowards(newPosX, newPosY);

                expect(auto.x).toEqual(newPosX);
                expect(auto.y).toEqual(yCoord * board.tileSize);
            });

            test('snaps to the closest board position', () => {
                newPosX = (xCoord + 1) * board.tileSize + 5;
                newPosY = yCoord * board.tileSize;
                auto.pushTowards(newPosX, newPosY);
                auto.snapYoAss();

                expect(auto.x).toEqual((xCoord + 1) * board.tileSize);
                expect(auto.y).toEqual(yCoord * board.tileSize);
            });
        });
    });
});