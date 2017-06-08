import {observable} from "mobx";

export default class Cuadradito {
  @observable x;
  @observable y;

  height() {
    return 50;
  }

  width() {
    return 50;
  }

  constructor(x = 0, y = 0, tablero) {
    this.tablero = tablero;
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  pushTowards(x, y) {
    this.setPosition(this.tablero.movementLimitX(this, x), this.tablero.movementLimitY(this, y));
  }
}
