import Cuadradito from "./Cuadradito"

export default class Tablero {
  constructor() {
    this.cuadraditos = [
      new Cuadradito(0, 0, this),
      new Cuadradito(100, 100, this)
    ];
  }

  canMoveTo(cuadradito, x, y) {
    return x >= 0 && y >= 0 && x <= 300 && y <= 500
  }

  movementLimitX(cuadradito, x) {
    if (x <= 0) {
      xMax = 0
    } else if (x >= 0 && x + cuadradito.width() <= 300) {
      xMax = x
    } else {
      xMax = 300 - cuadradito.width()
    }
    return xMax;
  }

  movementLimitY(cuadradito, y) {
    if (y <= 0) {
      yMax = 0
    } else if (y >= 0 && y + cuadradito.height() <= 500) {
      yMax = y
    } else {
      yMax = 500 - cuadradito.height()
    }
    return yMax;
  }
}
