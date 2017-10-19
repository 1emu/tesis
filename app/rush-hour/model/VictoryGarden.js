import Area from './Area';

export default class VictoryGarden extends Area {
  contains(area){
    let occupyingXSpan = this.isOccupyingXSpan(area.x, area.xMax());
    let occupyingYSpan = this.isOccupyingYSpan(area.y, area.yMax());
    return occupyingXSpan && occupyingYSpan;
  }
}
