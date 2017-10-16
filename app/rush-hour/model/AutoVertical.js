import CuadraditoVertical from "./CuadraditoVertical";
import CarImage from "./CarImages";

export default class AutoVertical extends CuadraditoVertical {
  constructor(id, x = 0, y = 0, color, tablero) {
    let image = CarImage.for('car', color, 'up');
    super(id, x, y, 1, 2, tablero, image);
  }
}
