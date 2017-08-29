import {observable, autorun} from "mobx";
import Metrics from '../Metrics';

export default class ZoologicPiece {
  DEFAULT_IMG = require('./img/empty.png');

  @observable x;
  @observable y;

  constructor(type, x = 0, y = 0, imanes) {
    this.type = type;
    this.imanes = imanes;
    this.setInitialPosition(x, y);
    this.setPosition(x, y);
    this.setDimensions(Metrics.TILE_SIZE, Metrics.TILE_SIZE);
    this.maxSpaceInBetween = 0;
    console.log('piece type: ' + JSON.stringify(this.type));
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
    this.setPosition(x, y);
  }

  snapYoAss(){
    let magnetInContact = this.getMagnetInContact();
    if (magnetInContact && magnetInContact.allows(this.type)) {
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
