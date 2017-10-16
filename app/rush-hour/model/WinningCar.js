import HorizontalVehicle from "./HorizontalVehicle";
import VehicleType from './VehicleType';

export default class WinningCar extends HorizontalVehicle {

  constructor(id, x = 0, y = 0, board) {
    super(id, x, y, board, 'red', 'right', VehicleType.car());
  }

  snapYoAss() {
    super.snapYoAss();
    this.board.checkWinCondition(this);
  }
}
