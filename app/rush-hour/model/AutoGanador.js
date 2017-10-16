import CarImage from "./CarImages";
import AutoHorizontal from "./AutoHorizontal";

export default class AutoGanador extends AutoHorizontal {

  constructor(id, x = 0, y = 0, tablero) {
    super(id, x, y, tablero, 'red', 'right');
  }

  checkWinCondition() {
    this.tablero.checkWinCondition(this);
  }
}
