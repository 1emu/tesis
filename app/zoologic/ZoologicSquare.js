import {observable, autorun} from 'mobx';
import Metrics from '../Metrics';

export default class ZoologicSquare {
  constructor(x = 0, y = 0, type, squareNumber, squares) {
    this.x = x;
    this.y = y;
    this.width = Metrics.ZOOLOGIC_SQUARE_SIZE;
    this.height = Metrics.ZOOLOGIC_SQUARE_SIZE;
    this.type = type;
    this._generateKey(x, y);
    this.squareNumber = squareNumber;
    this.squares = squares;
    this.storedPiece = null;
  }

  allows(pieceType) {
    return this._allowsOnTop(pieceType) && this._neighboursAllowIt(pieceType);
  }

  canBeAdjacentTo(pieceType) {
    return this.type.canBeAdjacentTo(pieceType) && this._storedPieceAllowsIt(pieceType);
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
    let thereIsAConflictingNeighbour = this._getNeighbours().map(square => square.canBeAdjacentTo(pieceType)).includes(false);
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

  _getNeighbours() {
    let neighbours = [this._leftNeighbour(), this._rightNeighbour(), this._topNeighbour(), this._bottomNeighbour()];
    return neighbours.filter(x => x);
  }

  _leftNeighbour() {
    if ([0, 5, 10, 15, 20].includes(this.squareNumber)) return null;
    return this.squares[this.squareNumber - 1];
  }

  _rightNeighbour() {
    if ([4, 9, 14, 19, 24].includes(this.squareNumber)) return null;
    return this.squares[this.squareNumber + 1];
  }

  _topNeighbour() {
    if (this.squareNumber < 5) return null;
    return this.squares[this.squareNumber - 5];
  }

  _bottomNeighbour() {
    if (this.squareNumber >= 20) return null;
    return this.squares[this.squareNumber + 5];
  }

  _storedPieceAllowsIt(pieceType) {
    return this.storedPiece ? this.storedPiece.canBeAdjacentTo(pieceType) : true;
  }
}
