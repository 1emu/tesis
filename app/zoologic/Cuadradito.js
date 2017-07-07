import {observable, autorun} from "mobx";
import Metrics from '../Metrics';

export default class Cuadradito {
  DEFAULT_IMG = require('../rush-hour/img/empty.png');

  @observable x;
  @observable y;

  constructor(id, x = 0, y = 0, width, height, imanes, image = null) {
    this.id = id;
    this.imanes = imanes;
    this.setInitialPosition(x, y);
    this.setPosition(x, y);
    this.setDimensions(width, height);
    this.maxSpaceInBetween = 0;

    this.image = (image ? image : this.DEFAULT_IMG);
  }

  setInitialPosition(x, y) {
    this.initialX = x;
    this.initialY = y;
  }

  setPosition(x, y){
    this.x = x;
    this.y = y;
  }

  setDimensions(width, height) {
    this.width = width;
    this.height = height;
  }

  xMax() {
    return this.x + this.width
  }

  yMax() {
    return this.y + this.height
  }

  isInContactWithMagnet(magnet) {
    return (this.x < magnet.x && this.xMax() > magnet.x) && (this.y < magnet.y && this.yMax() > magnet.y)
  }

  pushTowards(x, y) {
    // let newX, newY;
    // if (x >= this.x) {
    //   //Estoy empujandolo a la derecha
    //   newX = this.tablero.movementLimitRight(this, x);
    // } else {
    //   //Estoy empujandolo a la izquierda
    //   newX = this.tablero.movementLimitLeft(this, x);
    // }
    // if (y >= this.y) {
    //   //Estoy empujandolo hacia abajo
    //   newY = this.tablero.movementLimitBottom(this, y);
    // } else {
    //   //Estoy empujandolo hacia arriba
    //   newY = this.tablero.movementLimitTop(this, y);
    // }
    this.setPosition(x, y);
  }

  snapYoAss(){
    let magnetInContact = this.getMagnetInContact();
    if (magnetInContact) {
      this.setPosition(magnetInContact.x - this.width/2, magnetInContact.y - this.height/2)
    } else {
      this.setPosition(this.initialX, this.initialY);
    }
  }

  checkWinCondition(){
    // smile and wave
  }

  getMagnetInContact() {
    return this.imanes.find((iman) => this.isInContactWithMagnet(iman))
  }
}
