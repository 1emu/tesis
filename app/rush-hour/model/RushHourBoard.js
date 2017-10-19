import Area from './Area';
import Magnet from './Magnet'
import VictoryGarden from './VictoryGarden'
import {observable} from 'mobx';

export default class RushHourBoard {
  @observable playerHasWon = false;

  constructor(dimensions) {
    this.tileSize = dimensions.tileSize;
    this.maxSpaceInBetweenTiles = dimensions.maxSpaceInBetweenTiles;
    this.width = dimensions.boardWidth;
    this.height = dimensions.boardHeight;

    this._generateBumpers();
    this.colisionables = this.bumpers;
    this._generateMagnets();
    this.victoryGarden = new VictoryGarden('victoryGarden', 6, 2, 1, 1, this);
  }

  _generateBumpers(){
    this.bumpers = [
      new Area('b1', 6, 0, 1, 2, this),
      new Area('b2', 6, 3, 1, 3, this)
    ];
  }

  _generateMagnets() {
    this.magnets = [];

    for(let i = 0; i < this.width; i = i + this.tileSize){
      for (let j = 0; j < this.height; j = j + this.tileSize) {
        this.magnets.push(new Magnet('' + i + j, i, j))
      }
    }
  }

  _otherAreas(area) {
    return this.colisionables.filter((other) => { return area.id !== other.id })
  }

  _otherAreasAtTheSameHeightSpan(area) {
    return this._otherAreas(area).filter((other) => { return other.isOccupyingYSpan(area.y, area.yMax()) })
  }

  _otherAreasAtTheSameWidthSpan(area) {
    return this._otherAreas(area).filter((other) => { return other.isOccupyingXSpan(area.x, area.xMax()) });
  }

  placeVehicles(vehiculos) {
    this.areas = vehiculos;
    this.colisionables = this.colisionables.concat(this.areas);
  }

  movementLimitRight(area, x) {
    let areasToTheRight = this._otherAreasAtTheSameHeightSpan(area).filter((other) => { return other.x >= area.xMax() });
    let candidateMinimums = [x + area.width, this.width].concat(areasToTheRight.map((other) => { return other.x }));
    return Math.min(...candidateMinimums) - area.width;
  }

  movementLimitLeft(area, x) {
    let areasToTheLeft = this._otherAreasAtTheSameHeightSpan(area).filter((other) => { return other.x <= area.x });
    let candidateMaximums = [0, x].concat(areasToTheLeft.map((other) => { return other.xMax() }));
    return Math.max(...candidateMaximums);
  }

  movementLimitBottom(area, y) {
    let areasBelow = this._otherAreasAtTheSameWidthSpan(area).filter((other) => { return other.y >= area.yMax() });
    let candidateMinimums = [y + area.height, this.height].concat(areasBelow.map((other) => { return other.y }));
    return Math.min(...candidateMinimums) - area.height;
  }

  movementLimitTop(area, y) {
    let areasAbove = this._otherAreasAtTheSameWidthSpan(area).filter((other) => { return other.yMax() <= area.y });
    let candidateMaximums = [0, y].concat(areasAbove.map((other) => { return other.yMax() }));
    return Math.max(...candidateMaximums);
  }

  getClosestMagneto(area) {
    let magnetines = this.magnets.sort((magneto1, magneto2) => {
      return magneto1.distanceTo(area) - magneto2.distanceTo(area);
    });
    return magnetines[0]
  }

  checkWinCondition(area){
    if(this.victoryGarden.contains(area)){
      this.playerHasWon = true;
    }
  }
}