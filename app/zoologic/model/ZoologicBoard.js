import {observable} from 'mobx'

export default class ZoologicBoard {
  @observable playerHasWon = false;

  constructor(squareSize) {
    this.squares = [];
    this.pieces = [];
    this.squareSize = squareSize;
  }

  addSquare(square) {
    this.squares.push(square);
  }

  addPiece(piece) {
    this.pieces.push(piece)
  }

  evaluateWinCondition() {
    if (this.squares.every((square) => { return square.completeForWin() })) {
      this.playerHasWon = true;
    }
  }

  getNeighboursFor(square) {
    let adjacentPositions = square.adjacentPositions();
    return this.squares.filter((s) => {
      return adjacentPositions.some((pos) => { return s.occupies(pos.x, pos.y) })
    })
  }
}
