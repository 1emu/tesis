import CarImage from "./CarImages";
import CuadraditoHorizontal from "./CuadraditoHorizontal";

export default class AutoGanador extends CuadraditoHorizontal {

  constructor(id, x = 0, y = 0, tablero) {
    let image = CarImage.for('car', 'red', 'right');
    super(id, x, y, 2, 1, tablero, image);
  }

  checkWinCondition() {
    this.tablero.checkWinCondition(this);
  }
}
