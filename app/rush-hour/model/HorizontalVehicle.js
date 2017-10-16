import CarImage from "../img/CarImages";
import Cuadradito from './Cuadradito';

export default class HorizontalVehicle extends Cuadradito {
  constructor(id, x = 0, y = 0, tablero, color, orientation = 'left', vehicleType) {
    let image = CarImage.for(vehicleType.typeName, color, orientation);
    super(id, x, y, vehicleType.lengthInTiles, 1, tablero, image);
  }

  setPosition(x, y) {
    this.x = x;
  }
}
