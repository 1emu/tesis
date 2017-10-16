import Magneto from "./Magneto"
import VictoryGarden from "./VictoryGarden"
import Bumper from "./Bumper";
import Metrics from '../Metrics';
import {observable} from "mobx";

export default class Tablero {
  @observable playerHasWon = false;

  constructor() {
    this.tileSize = Metrics.TILE_SIZE;
    this.maxSpaceInBetweenTiles = Metrics.MAX_SPACE_IN_BETWEEN_TILES;
    this.width = Metrics.BOARD_WIDTH;
    this.height = Metrics.BOARD_HEIGHT;

    this.generarBumpers();
    this.colisionables = this.bumpers;
    this.generarMagnetos();
    this.victoryGarden = new VictoryGarden('victoryGarden', 6, 2, 1, 1, this);
  }

  ubicarVehiculos(vehiculos) {
    this.cuadraditos = vehiculos;
    this.colisionables = this.colisionables.concat(this.cuadraditos);
  }

  generarBumpers(){
    this.bumpers = [
      new Bumper('b1', 6, 0, 1, 2, this),
      new Bumper('b2', 6, 3, 1, 3, this)
    ];
  }

  generarMagnetos() {
    this.imanes = [];

    for(let i = 0; i < this.width; i = i + this.tileSize){
      for (let j = 0; j < this.height; j = j + this.tileSize) {
        this.imanes.push(new Magneto('' + i + j, i, j))
      }
    }
  }

  otherCuadraditos(cuadradito) {
    return this.colisionables.filter((other) => { return cuadradito.id !== other.id })
  }

  otherCuadraditosAtTheSameHeightSpan(cuadradito) {
    return this.otherCuadraditos(cuadradito).filter((other) => { return other.isOccupyingYSpan(cuadradito.y, cuadradito.yMax()) })
  }

  otherCuadraditosAtTheSameWidthSpan(cuadradito) {
    return this.otherCuadraditos(cuadradito).filter((other) => { return other.isOccupyingXSpan(cuadradito.x, cuadradito.xMax()) });
  }

  movementLimitRight(cuadradito, x) {
    let cuadraditosToTheRight = this.otherCuadraditosAtTheSameHeightSpan(cuadradito).filter((other) => { return other.x >= cuadradito.xMax() });
    let candidateMinimums = [x + cuadradito.width, this.width].concat(cuadraditosToTheRight.map((other) => { return other.x }));
    return Math.min(...candidateMinimums) - cuadradito.width;
  }

  movementLimitLeft(cuadradito, x) {
    let cuadraditosToTheLeft = this.otherCuadraditosAtTheSameHeightSpan(cuadradito).filter((other) => { return other.x <= cuadradito.x });
    let candidateMaximums = [0, x].concat(cuadraditosToTheLeft.map((other) => { return other.xMax() }));
    return Math.max(...candidateMaximums);
  }

  movementLimitBottom(cuadradito, y) {
    let cuadraditosBelow = this.otherCuadraditosAtTheSameWidthSpan(cuadradito).filter((other) => { return other.y >= cuadradito.yMax() });
    let candidateMinimums = [y + cuadradito.height, this.height].concat(cuadraditosBelow.map((other) => { return other.y }));
    return Math.min(...candidateMinimums) - cuadradito.height;
  }

  movementLimitTop(cuadradito, y) {
    let cuadraditosAbove = this.otherCuadraditosAtTheSameWidthSpan(cuadradito).filter((other) => { return other.yMax() <= cuadradito.y });
    let candidateMaximums = [0, y].concat(cuadraditosAbove.map((other) => { return other.yMax() }));
    return Math.max(...candidateMaximums);
  }

  getClosestMagneto(cuadradito) {
    let magnetines = this.imanes.sort((magneto1, magneto2) => {
      return magneto1.distanceTo(cuadradito) - magneto2.distanceTo(cuadradito);
    });
    return magnetines[0]
  }

  checkWinCondition(cuadradito){
    if(this.victoryGarden.contains(cuadradito)){
      this.playerHasWon = true;
    }
  }
}
