import Cuadradito from "./Cuadradito"
import Magneto from "./Magneto"
import VictoryGarden from "./VictoryGarden"
import CuadraditoGanador from './CuadraditoGanador';
import randomcolor from 'randomcolor';
import CuadraditoHorizontal from './CuadraditoHorizontal';
import CuadraditoVertical from './CuadraditoVertical';

export default class Tablero {

  constructor(props) {
    this.navigator = props.navigator;
    this.metrics = props.metrics;

    this.generarCuadraditos();
    this.generarBumpers();
    this.colisionables = this.cuadraditos.concat(this.bumpers);

    this.generarMagnetos();
    this.victoryGarden = new VictoryGarden('victoryGarden', 2, 0, 1, 1, this);
  }

  generarCuadraditos() {
    let cuadraditosColors = randomcolor({count: 6, luminosity: 'bright'});
    let image = require('./img/car_top_view_fat.png');
    let leftCarImage = require('./img/horizontal_left_car_2.png');
    let rightCarImage = require('./img/horizontal_right_car_2.png');
    let upCarImage = require('./img/vertical_up_car_2.png');
    let downCarImage = require('./img/vertical_down_car_2.png');
    let upTruckImage = require('./img/vertical_up_truck.png');

    this.cuadraditos = [
      new CuadraditoHorizontal('1', 0, 2, 2, 1, this, cuadraditosColors[0], rightCarImage),
      new CuadraditoVertical('2', 1, 3, 1, 2, this, cuadraditosColors[1], downCarImage),
      new CuadraditoHorizontal('3', 3, 1, 2, 1, this, cuadraditosColors[2], leftCarImage),
      new CuadraditoHorizontal('4', 2, 3, 2, 1, this, cuadraditosColors[3], leftCarImage),
      new CuadraditoVertical('5', 3, 5, 1, 2, this, cuadraditosColors[4], upCarImage),
      new CuadraditoVertical('6', 4, 2, 1, 5, this, 'lightgray', upTruckImage),

    ];

    this.cuadraditos.push(new CuadraditoGanador('ganador', 2, 5, 1, 1, this, 'red', image));
  }

  generarBumpers(){
    let bumperColors = randomcolor({hue: 'monochrome', seed: 1, count: 1});
    this.bumpers = [
      new Cuadradito('b1', 0, 0, 2, 1, this, bumperColors[0]),
      new Cuadradito('b2', 3, 0, 2, 1, this, bumperColors[0])
    ];
  }

  generarMagnetos() {
    this.magnetitos = [];

    let width = this.metrics.BOARD_WIDTH;
    let height = this.metrics.BOARD_HEIGHT;
    let tileSize = this.metrics.TILE_SIZE;

    for(i = 0; i < width; i = i + tileSize){
      for (j = 0; j < height; j = j + tileSize) {
        this.magnetitos.push(new Magneto('' + i + j, i, j))
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
    let candidateMinimums = [x + cuadradito.width, this.metrics.BOARD_WIDTH].concat(cuadraditosToTheRight.map((other) => { return other.x }));
    return Math.min(...candidateMinimums) - cuadradito.width;
  }

  movementLimitLeft(cuadradito, x) {
    let cuadraditosToTheLeft = this.otherCuadraditosAtTheSameHeightSpan(cuadradito).filter((other) => { return other.x <= cuadradito.x });
    let candidateMaximums = [0, x].concat(cuadraditosToTheLeft.map((other) => { return other.xMax() }));
    return Math.max(...candidateMaximums);
  }

  movementLimitBottom(cuadradito, y) {
    let cuadraditosBelow = this.otherCuadraditosAtTheSameWidthSpan(cuadradito).filter((other) => { return other.y >= cuadradito.yMax() });
    let candidateMinimums = [y + cuadradito.height, this.metrics.BOARD_HEIGHT].concat(cuadraditosBelow.map((other) => { return other.y }));
    return Math.min(...candidateMinimums) - cuadradito.height;
  }

  movementLimitTop(cuadradito, y) {
    let cuadraditosAbove = this.otherCuadraditosAtTheSameWidthSpan(cuadradito).filter((other) => { return other.yMax() <= cuadradito.y });
    let candidateMaximums = [0, y].concat(cuadraditosAbove.map((other) => { return other.yMax() }));
    return Math.max(...candidateMaximums);
  }

  getClosestMagneto(cuadradito) {
    let magnetines = this.magnetitos.sort((magneto1, magneto2) => {
      return magneto1.distanceTo(cuadradito) - magneto2.distanceTo(cuadradito);
    });
    return magnetines[0]
  }

  checkWinCondition(cuadradito){
    if(this.victoryGarden.contains(cuadradito)){
      this.navigator.push({id: 'first'});
    }
  }
}
