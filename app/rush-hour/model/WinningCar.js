import HorizontalVehicle from "./HorizontalVehicle";
import VehicleType from './VehicleType';

export default class WinningCar extends HorizontalVehicle {

  constructor(id, x = 0, y = 0, tablero) {
    super(id, x, y, tablero, 'red', 'right', VehicleType.car());
  }

  checkWinCondition() {
    this.tablero.checkWinCondition(this);
  }
}
