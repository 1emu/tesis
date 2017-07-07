import {observable} from "mobx";
import Metrics from './Metrics';

export default class VictoryTile {
  @observable backgroundColor;

  constructor(id, x = 0, y = 0, widthEnCuadraditos, heightEnCuadraditos, tablero) {
    this.id = id;
    this.backgroundColor = 'lightgrey';
    this.setDimensions(widthEnCuadraditos, heightEnCuadraditos, Metrics.TILE_SIZE);
    this.setPosition(x * Metrics.TILE_SIZE, y * Metrics.TILE_SIZE);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setDimensions(widthEnCuadraditos, heightEnCuadraditos, tileSize) {
    this.width = tileSize * widthEnCuadraditos;
    this.height = tileSize * heightEnCuadraditos;
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
