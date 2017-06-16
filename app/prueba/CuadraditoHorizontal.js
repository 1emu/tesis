import {observable, autorun} from "mobx";
import Cuadradito from './Cuadradito';

export default class CuadraditoHorizontal extends Cuadradito {

  setPosition(x, y) {
    this.x = x;
  }

}
