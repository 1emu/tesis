import CarImage from "../img/CarImages";
import RushHourPiece from './RushHourPiece';

export default class VerticalVehicle extends RushHourPiece {
  constructor(id, x = 0, y = 0, board, color, orientation = 'up', vehicleType) {
    let image = CarImage.for(vehicleType.typeName, color, orientation);
    super(id, x, y, 1, vehicleType.lengthInTiles, board, image);
  }

  setPosition(x, y) {
    this.y = y;
  }
}