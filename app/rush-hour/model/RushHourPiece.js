import {observable} from 'mobx';
import Area from './Area';

export default class RushHourPiece extends Area {
  DEFAULT_IMG = require('../img/empty.png');

  @observable x;
  @observable y;

  constructor(id, xCoordinate = 0, yCoordinate = 0, widthInTiles, heightInTiles, board, image = null) {
    super(id, xCoordinate, yCoordinate, widthInTiles, heightInTiles, board);
    this.image = (image ? image : this.DEFAULT_IMG);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  pushTowards(x, y) {
    let newX, newY;
    if (x >= this.x) {
      //Estoy empujandolo a la derecha
      newX = this.board.movementLimitRight(this, x);
    } else {
      //Estoy empujandolo a la izquierda
      newX = this.board.movementLimitLeft(this, x);
    }
    if (y >= this.y) {
      //Estoy empujandolo hacia abajo
      newY = this.board.movementLimitBottom(this, y);
    } else {
      //Estoy empujandolo hacia arriba
      newY = this.board.movementLimitTop(this, y);
    }
    this.setPosition(newX, newY);
  }

  snapYoAss() {
    let closestMagneto = this.board.getClosestMagneto(this);
    this.setPosition(closestMagneto.x, closestMagneto.y);
  }
}