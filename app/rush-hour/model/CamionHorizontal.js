import CuadraditoHorizontal from "./CuadraditoHorizontal";
import CarImage from "./CarImages";

export default class CamionHorizontal extends CuadraditoHorizontal {
  constructor(id, x = 0, y = 0, color, tablero) {
    let image = CarImage.for('truck', color, 'left');
    super(id, x, y, 3, 1, tablero, image);
  }
}
