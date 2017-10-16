import CuadraditoHorizontal from "./CuadraditoHorizontal";
import CarImage from "./CarImages";

export default class HorizontalVehicle extends CuadraditoHorizontal {
  constructor(id, x = 0, y = 0, tablero, color, orientation = 'left', vehicleType) {
    let image = CarImage.for(vehicleType.typeName, color, orientation);
    super(id, x, y, vehicleType.lengthInTiles, 1, tablero, image);
  }
}
