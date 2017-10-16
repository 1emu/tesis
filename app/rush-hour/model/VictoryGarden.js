import Area from './Area';

export default class VictoryGarden extends Area {

  contains(cuadradito){
    let occupyingXSpan = this.isOccupyingXSpan(cuadradito.x, cuadradito.xMax());
    let occupyingYSpan = this.isOccupyingYSpan(cuadradito.y, cuadradito.yMax());
    return occupyingXSpan && occupyingYSpan;
  }
}
