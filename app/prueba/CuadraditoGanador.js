import {observable, autorun} from "mobx";
import Cuadradito from './Cuadradito';

export default class CuadraditoGanador extends Cuadradito {

  constructor(id, x = 0, y = 0, width, height, tablero) {
    super(id, x = 0, y = 0, width, height, tablero);
    this.backgroundColor = 'red';
  }


  checkWinCondition() {
    this.tablero.checkWinCondition(this);
  }
}
