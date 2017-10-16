import {observable, autorun} from 'mobx';
import Metrics from '../../Metrics';

export default class Cuadradito {
  DEFAULT_IMG = require('../img/empty.png');

  @observable x;
  @observable y;

  constructor(id, xCoordinate = 0, yCoordinate = 0, widthInTiles, heightInTiles, board, image = null) {
    this.id = id;
    this.board = board;

    this.setInitialPosition(xCoordinate * board.tileSize, yCoordinate * board.tileSize);
    this.setDimensions(widthInTiles, heightInTiles, board.tileSize);
    this.maxSpaceInBetween = board.maxSpaceInBetweenTiles;

    this.image = (image ? image : this.DEFAULT_IMG);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setInitialPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setDimensions(width, height, tileSize) {
    this.width = width * tileSize;
    this.height = height * tileSize;
  }

  xMax() {
    return this.x + this.width
  }

  yMax() {
    return this.y + this.height
  }

  isOccupyingYSpan(yMin, yMax) {
    return !(yMin >= this.yMax() - this.maxSpaceInBetween || yMax <= this.y + this.maxSpaceInBetween);
  }

  isOccupyingXSpan(xMin, xMax) {
    return !(xMin >= this.xMax() - this.maxSpaceInBetween || xMax <= this.x + this.maxSpaceInBetween);
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
