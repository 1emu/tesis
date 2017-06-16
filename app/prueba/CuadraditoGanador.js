import {observable, autorun} from "mobx";
import Cuadradito from './Cuadradito';

export default class CuadraditoGanador extends Cuadradito {

  checkWinCondition() {
    this.tablero.checkWinCondition(this);
  }
}
