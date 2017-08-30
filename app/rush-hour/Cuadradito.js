import {observable, autorun} from 'mobx';
import Metrics from '../Metrics';

export default class Cuadradito {
  DEFAULT_IMG = require('./img/empty.png');

  @observable x;
  @observable y;

  constructor(id, x = 0, y = 0, width, height, tablero, image = null) {
    this.id = id;
    this.tablero = tablero;

    this.setInitialPosition(x * Metrics.TILE_SIZE, y * Metrics.TILE_SIZE);
    this.setDimensions(width, height, Metrics.TILE_SIZE);
    this.maxSpaceInBetween = Metrics.MAX_SPACE_IN_BETWEEN_TILES;

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
      newX = this.tablero.movementLimitRight(this, x);
    } else {
      //Estoy empujandolo a la izquierda
      newX = this.tablero.movementLimitLeft(this, x);
    }
    if (y >= this.y) {
      //Estoy empujandolo hacia abajo
      newY = this.tablero.movementLimitBottom(this, y);
    } else {
      //Estoy empujandolo hacia arriba
      newY = this.tablero.movementLimitTop(this, y);
    }
    this.setPosition(newX, newY);
  }

  snapYoAss() {
    let closestMagneto = this.tablero.getClosestMagneto(this);
    this.setPosition(closestMagneto.x, closestMagneto.y);
  }

  checkWinCondition() {
    // smile and wave
  }
}