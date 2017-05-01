class RushHourBoard {
  constructor() {
    this.board = [];
  }

  place(vehicle) {
    this.checkForCollisions(vehicle);
    this.board.push(vehicle);
  }

  checkForCollisions(vehicle) {
    if (this.board.some((other_vehicle) => { return vehicle.collidesWith(other_vehicle) })) {
      throw "occupied";
    }
  }

  spaceIsOccupied(position) {
    return this.board.some((vehicle) => { return vehicle.occupies(position) })
  }
}

class Car {
  constructor(length, height, position) {
    this.length = length;
    this.height = height;
    this.x = position.x;
    this.y = position.y;
  }

  occupies(position) {
    return position.x >= this.x && position.x <= this.maxX();
  }

  collidesWith(other_vehicle) {
    return (this.x <= other_vehicle.maxX() || this.maxX() >= other_vehicle.x) &&
        (this.y <= other_vehicle.maxY() || this.maxY() >= other_vehicle.y);
  }

  maxX() {
    return this.x + this.length - 1;
  }

  maxY() {
    return this.y + this.height - 1;
  }
}

describe('RushHourBoard', () => {
  describe('#place', () => {

    test('places car on the specified space', () => {
      board = new RushHourBoard();
      board.place(new Car(2, 1, { x: 0, y: 0 }));
      board.place(new Car(1, 2, { x: 0, y: 1 }));

      expect(board.spaceIsOccupied({ x: 0, y: 0 })).toBe(true);
      expect(board.spaceIsOccupied({ x: 1, y: 0 })).toBe(true);
      expect(board.spaceIsOccupied({ x: 0, y: 1 })).toBe(true);
      expect(board.spaceIsOccupied({ x: 0, y: 2 })).toBe(true);
    });

    test('cant place 2 cars on the same space', () => {
      board = new RushHourBoard();
      let position = { x: 0, y: 0 };
      board.place(new Car(2, 1, position));

      expect(() => { board.place(new Car(2, 1, position)) }).toThrow("occupied");
    });

    test('cant place a car on a space occupied by the length of another car', () => {
      board = new RushHourBoard();
      board.place(new Car(2, 1, { x: 0, y: 0 }));

      expect(() => { board.place(new Car(2, 1, { x: 1, y: 0 })) }).toThrow("occupied");
    });

    test('cant place a car with a length that would occupies the space of another car', () => {
      board = new RushHourBoard();
      board.place(new Car(2, 1, { x: 1, y: 0 }));

      expect(() => { board.place(new Car(4, { x: 0, y: 0 })) }).toThrow("occupied");
    });

    test('cant place a car with a length that would occupy the height of another car', () => {
      board = new RushHourBoard();
      board.place(new Car(2, 1, { x: 1, y: 0 }));

      expect(() => { board.place(new Car(4, 1, { x: 0, y: 0 })) }).toThrow("occupied");
    });
  });
});

