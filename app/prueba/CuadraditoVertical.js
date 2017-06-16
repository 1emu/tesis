import {observable, autorun} from "mobx";
import Cuadradito from './Cuadradito';

export default class CuadraditoVertical extends Cuadradito {

  setPosition(x, y) {
    this.y = y;
  }

}
