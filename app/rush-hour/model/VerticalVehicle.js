import CarImage from "../img/CarImages";
import Cuadradito from './Cuadradito';

export default class VerticalVehicle extends Cuadradito {
  constructor(id, x = 0, y = 0, tablero, color, orientation = 'up', vehicleType) {
    let image = CarImage.for(vehicleType.typeName, color, orientation);
    super(id, x, y, 1, vehicleType.lengthInTiles, tablero, image);
  }

  setPosition(x, y) {
    this.y = y;
  }
}
