import {observable, autorun} from 'mobx';
import Metrics from '../Metrics';

export default class ZoologicPiece {
  @observable x;
  @observable y;

  constructor(type, x = 0, y = 0, squares) {
    this.type = type;
    this.squares = squares;
    this._setInitialPosition(x, y);
    this._setPosition(x, y);
    this._setDimensions(Metrics.TILE_SIZE, Metrics.TILE_SIZE);
    this.maxSpaceInBetween = 0;
  }

  pushTowards(x, y) {
    this._setPosition(x, y);
  }

  snapYoAss() {
    let squareInContact = this._getSquareInContact();
    if (squareInContact && squareInContact.allows(this.type)) {
      this._abandonSquare();
      this._occupySquare(squareInContact);
    } else {
      this._abandonSquare();
      this._resetToInitialPosition();
    }
  }

  canBeAdjacentTo(pieceType) {
    return this.type.canBeAdjacentTo(pieceType);
  }

  _occupySquare(squareInContact) {
    this._centerInSquare(squareInContact);
    squareInContact.store(this);
    this._receive(squareInContact);
  }

  _abandonSquare() {
    if (this.containingSquare) {
      this.containingSquare.partWays();
      this._partWays();
    }
  }

  _centerInSquare(squareInContact) {
    this._setPosition(squareInContact.x - this.width / 2, squareInContact.y - this.height / 2);
  }

  _resetToInitialPosition() {
    this._setPosition(this.initialX, this.initialY);
  }

  checkWinCondition() {
    // smile and wave
  }

  _receive(squareInContact) {
    console.log('occupying ', squareInContact.type.knownType);
    this.containingSquare = squareInContact;
  }

  _partWays() {
    console.log('abandoning ', this.containingSquare.type.knownType);
    this.containingSquare = null;
  }

  _setInitialPosition(x, y) {
    this.initialX = x;
    this.initialY = y;
  }

  _setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  _setDimensions(width, height) {
    this.width = width;
    this.height = height;
  }

  _xMax() {
    return this.x + this.width
  }

  _yMax() {
    return this.y + this.height
  }

  _isInContactWithSquare(square) {
    return (this.x < square.x && this._xMax() > square.x) && (this.y < square.y && this._yMax() > square.y)
  }

  _getSquareInContact() {
    return this.squares.find((square) => this._isInContactWithSquare(square))
  }
}
