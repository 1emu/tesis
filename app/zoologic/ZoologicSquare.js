import {observable, autorun} from 'mobx';
import Metrics from '../Metrics';

export default class ZoologicSquare {
  constructor(matrixX = 0, matrixY = 0, type, board) {
    this.matrixX = matrixX;
    this.matrixY = matrixY;
    let startX = Metrics.ZOOLOGIC_PIECES_BAR_WIDTH + Metrics.TILE_SIZE / 2 + 20;
    let startY = Metrics.NAV_BAR_HEIGHT + Metrics.TILE_SIZE / 2 + 50;
    this.x = startX + matrixX * Metrics.TILE_SIZE/2;
    this.y = startY + matrixY * Metrics.TILE_SIZE/2;
    this.width = Metrics.ZOOLOGIC_SQUARE_SIZE;
    this.height = Metrics.ZOOLOGIC_SQUARE_SIZE;
    this.type = type;
    this._generateKey(this.x, this.y);
    this.board = board;
    this.storedPiece = null;
  }

  occupies(matrixX, matrixY) {
    return matrixX >= this.matrixX && matrixX <= this.matrixX + 1 && matrixY >= this.matrixY && matrixY <= this.matrixY + 1
  }

  allows(pieceType) {
    return this._allowsOnTop(pieceType) && this._neighboursAllowIt(pieceType);
  }

  canBeAdjacentTo(pieceType) {
    return this.type.canBeAdjacentTo(pieceType) && this._storedPieceAllowsIt(pieceType);
  }

  adjacentPositions() {
    return [
      { x: this.matrixX, y:  this.matrixY - 1 },
      { x: this.matrixX + 1, y:  this.matrixY - 1 },
      { x: this.matrixX + 2, y:  this.matrixY },
      { x: this.matrixX + 2, y:  this.matrixY + 1 },
      { x: this.matrixX + 1, y:  this.matrixY + 2 },
      { x: this.matrixX, y:  this.matrixY + 2 },
      { x: this.matrixX - 1, y:  this.matrixY + 1 },
      { x: this.matrixX - 1, y:  this.matrixY },
    ]
  }

  store(piece) {
    if (this.storedPiece) throw new Error('Received piece but already had one. Receiver: ' + JSON.stringify(this) + '. Received: ' + piece);
    this.storedPiece = piece;
  }

  partWays() {
    this.storedPiece = null;
  }

  _allowsOnTop(pieceType) {
    return this._theSquareTypeAllowsIt(pieceType) && this._theSquareIsFree();
  }

  _neighboursAllowIt(pieceType) {
    let thereIsAConflictingNeighbour = this.board.getNeighboursFor(this).some(square => !square.canBeAdjacentTo(pieceType));
    return !thereIsAConflictingNeighbour;
  }

  _theSquareIsFree() {
    return !this.storedPiece;
  }

  _theSquareTypeAllowsIt(pieceType) {
    return this.type.allowsOnTop(pieceType);
  }

  _generateKey(i, j) {
    this.key = 'square-' + i + '-' + j;
  }

  _storedPieceAllowsIt(pieceType) {
    return this.storedPiece ? this.storedPiece.canBeAdjacentTo(pieceType) : true;
  }
}
