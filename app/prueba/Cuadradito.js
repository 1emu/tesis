import {observable, autorun} from "mobx";

export default class Cuadradito {
  @observable x;
  @observable y;

  height() {
    return 50;
  }

  width() {
    return 50;
  }

  constructor(id, x = 0, y = 0, tablero) {
    this.id = id;
    this.tablero = tablero;
    this.backgroundColor = 'green';
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  xMax() {
    return this.x + this.width()
  }

  yMax() {
    return this.y + this.height()
  }

  isOccupyingYSpan(yMin, yMax) {
    return !(yMin >= this.yMax() || yMax <= this.y);
  }

  isOccupyingXSpan(xMin, xMax) {
    return !(xMin >= this.xMax() || xMax <= this.x);
  }

  pushTowards(x, y) {
    var newX, newY;
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

  snapYoAss(){
    let closestMagneto = this.tablero.getClosestMagneto(this);
    this.setPosition(closestMagneto.x, closestMagneto.y);
  }

  checkWinCondition(){
    // smile and wave
  }
}
