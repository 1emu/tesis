import {observable} from "mobx";

export default class VictoryTile {
  @observable backgroundColor;

  constructor(id, x = 0, y = 0, widthEnCuadraditos, heightEnCuadraditos) {
    this.id = id;
    this.backgroundColor = 'blue';
    this.setDimensions(widthEnCuadraditos, heightEnCuadraditos);
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.x = x * 50;
    this.y = y * 50;
  }

  setDimensions(widthEnCuadraditos, heightEnCuadraditos) {
    this.width = 50 * widthEnCuadraditos;
    this.height = 50 * heightEnCuadraditos;
  }

  distanceTo(cuadradito) {
    let xDistance = Math.pow(this.x - cuadradito.x, 2);
    let yDistance = Math.pow(this.y - cuadradito.y, 2);
    return Math.sqrt(xDistance + yDistance);
  }

  xMax() {
    return this.x + this.width
  }

  yMax() {
    return this.y + this.height
  }

  isOccupyingYSpan(yMin, yMax) {
    return !(yMin >= this.yMax() || yMax <= this.y);
  }

  isOccupyingXSpan(xMin, xMax) {
    return !(xMin >= this.xMax() || xMax <= this.x);
  }

  contains(cuadradito){
    let occupyingXSpan = this.isOccupyingXSpan(cuadradito.x, cuadradito.xMax());
    let occupyingYSpan = this.isOccupyingYSpan(cuadradito.y, cuadradito.yMax());
    return occupyingXSpan && occupyingYSpan;
  }
}
