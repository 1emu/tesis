import Cuadradito from "./Cuadradito"
import Magneto from "./Magneto"
import VictoryGarden from "./VictoryGarden"

export default class Tablero {
  constructor(navigator) {
    this.cuadraditos = [
      new Cuadradito('c', 100, 200, this)
    ];

    this.magnetitos = [];

    for (i = 0; i < 300; i = i +50) {
      for (j = 0; j < 500; j = j +50) {
        this.magnetitos.push(new Magneto(''+i+j, i, j, this))
      }
    }

    this.victoryGarden = new VictoryGarden('victoryGarden', 1, 0, 4, 1);

    this.navigator = navigator;
  }

  otherCuadraditos(cuadradito) {
    return this.cuadraditos.filter((other) => { return cuadradito.id !== other.id })
  }

  otherCuadraditosAtTheSameHeightSpan(cuadradito) {
    return this.otherCuadraditos(cuadradito).filter((other) => { return other.isOccupyingYSpan(cuadradito.y, cuadradito.yMax()) })
  }

  otherCuadraditosAtTheSameWidthSpan(cuadradito) {
    return this.otherCuadraditos(cuadradito).filter((other) => { return other.isOccupyingXSpan(cuadradito.x, cuadradito.xMax()) });
  }

  movementLimitRight(cuadradito, x) {
    let cuadraditosToTheRight = this.otherCuadraditosAtTheSameHeightSpan(cuadradito).filter((other) => { return other.x >= cuadradito.xMax() });
    let candidateMinimums = [x + cuadradito.width(), 300].concat(cuadraditosToTheRight.map((other) => { return other.x }));
    return Math.min(...candidateMinimums) - cuadradito.width();
  }

  movementLimitLeft(cuadradito, x) {
    let cuadraditosToTheLeft = this.otherCuadraditosAtTheSameHeightSpan(cuadradito).filter((other) => { return other.x <= cuadradito.x });
    let candidateMaximums = [0, x].concat(cuadraditosToTheLeft.map((other) => { return other.xMax() }));
    return Math.max(...candidateMaximums);
  }

  movementLimitBottom(cuadradito, y) {
    let cuadraditosBelow = this.otherCuadraditosAtTheSameWidthSpan(cuadradito).filter((other) => { return other.y >= cuadradito.yMax() });
    let candidateMinimums = [y + cuadradito.height(), 500].concat(cuadraditosBelow.map((other) => { return other.y }));
    return Math.min(...candidateMinimums) - cuadradito.height();
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
