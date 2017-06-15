export default class Magneto {

  constructor(id, x = 0, y = 0) {
    this.id = id;
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(cuadradito) {
    let xDistance = Math.pow(this.x - cuadradito.x, 2);
    let yDistance = Math.pow(this.y - cuadradito.y, 2);
    return Math.sqrt(xDistance + yDistance);
  }
}
