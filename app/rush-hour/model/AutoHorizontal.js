import CuadraditoHorizontal from "./CuadraditoHorizontal";
import CarImage from "./CarImages";

export default class AutoHorizontal extends CuadraditoHorizontal {
  constructor(id, x = 0, y = 0, tablero, color, orientation = 'left') {
    let image = CarImage.for('car', color, orientation);
    super(id, x, y, 2, 1, tablero, image);
  }
}
