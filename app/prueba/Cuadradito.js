import {observable} from "mobx";

export default class Cuadradito {
  @observable x;
  @observable y;

  constructor(x = 0, y = 0) {
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
