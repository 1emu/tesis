export default class ZoologicBoard {
  constructor() {
    this.squares = [];
  }

  addSquare(square) {
    this.squares.push(square);
  }

  getNeighboursFor(square) {
    let adjacentPositions = square.adjacentPositions();
    return this.squares.filter((s) => {
      return adjacentPositions.some((pos) => { return s.occupies(pos.x, pos.y) })
    })
  }
}
