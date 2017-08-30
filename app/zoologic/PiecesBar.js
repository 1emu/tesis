import {observable} from "mobx";
import Metrics from '../Metrics';

export default class ShapeBar {
  @observable backgroundColor;

  constructor(id, x = 0, y = 0, width, height) {
    this.id = id;
    this.backgroundColor = 'grey';
    this.setDimensions(width, height);
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setDimensions(width, height) {
    this.width = width;
    this.height = height;
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
    let occupyingXSpan = this.isOccupyingXSpan(cuadradito.x, cuadradito._xMax());
    let occupyingYSpan = this.isOccupyingYSpan(cuadradito.y, cuadradito._yMax());
    return occupyingXSpan && occupyingYSpan;
  }
}
