import CuadraditoVertical from "./CuadraditoVertical";
import CarImage from "./CarImages";

export default class VerticalVehicle extends CuadraditoVertical {
  constructor(id, x = 0, y = 0, tablero, color, orientation = 'up', vehicleType) {
    let image = CarImage.for(vehicleType.typeName, color, orientation);
    super(id, x, y, 1, vehicleType.lengthInTiles, tablero, image);
  }
}
