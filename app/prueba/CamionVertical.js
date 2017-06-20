import CuadraditoVertical from "./CuadraditoVertical";
import CarImage from "./CarImages";

export default class CamionVertical extends CuadraditoVertical {
  constructor(id, x = 0, y = 0, color, tablero) {
    let image = CarImage.for('truck', color, 'up');
    super(id, x, y, 1, 3, tablero, image);
  }
}
