export default class VehicleType {

  constructor(typeName, lengthInTiles) {
    this.typeName = typeName;
    this.lengthInTiles = lengthInTiles;
  }

  static truck() {
    return new VehicleType('truck', 3);
  }

  static car() {
    return new VehicleType('car', 2);
  }
}