export default class ZoologicBoard {
  constructor() {
    this.squares = [];
    this.pieces = [];
  }

  addSquare(square) {
    this.squares.push(square);
  }

  addPiece(piece) {
    this.pieces.push(piece)
  }

  getNeighboursFor(square) {
    let adjacentPositions = square.adjacentPositions();
    return this.squares.filter((s) => {
      return adjacentPositions.some((pos) => { return s.occupies(pos.x, pos.y) })
    })
  }
}
