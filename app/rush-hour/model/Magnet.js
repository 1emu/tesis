export default class Magnet {

  constructor(id, x = 0, y = 0) {
    this.id = id;
    this._setPosition(x, y);
  }

  _setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(area) {
    let xDistance = Math.pow(this.x - area.x, 2);
    let yDistance = Math.pow(this.y - area.y, 2);
    return Math.sqrt(xDistance + yDistance);
  }
}
