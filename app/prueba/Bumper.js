import {observable, autorun} from "mobx";
import Cuadradito from './Cuadradito';

export default class Bumper extends Cuadradito {

  constructor(id, x, y, width, height, tablero) {
    super(id, x, y, width, height, tablero);
    this.backgroundColor = 'red';
    this.x = x;
    this.y = y;
  }

  setPosition(x, y) {
  }

  checkWinCondition() {
  }
}
