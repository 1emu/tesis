export default class Area {
  constructor(id, xCoordinate = 0, yCoordinate = 0, widthInTiles, heightInTiles, board) {
    this.id = id;
    this.board = board;

    this._setInitialPosition(xCoordinate * board.tileSize, yCoordinate * board.tileSize);
    this._setDimensions(widthInTiles, heightInTiles, board.tileSize);
    this.maxSpaceInBetween = board.maxSpaceInBetweenTiles;
  }

  _setInitialPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  _setDimensions(width, height, tileSize) {
    this.width = width * tileSize;
    this.height = height * tileSize;
  }

  xMax() {
    return this.x + this.width
  }

  yMax() {
    return this.y + this.height
  }

  isOccupyingYSpan(yMin, yMax) {
    return !(yMin >= this.yMax() - this.maxSpaceInBetween || yMax <= this.y + this.maxSpaceInBetween);
  }

  isOccupyingXSpan(xMin, xMax) {
    return !(xMin >= this.xMax() - this.maxSpaceInBetween || xMax <= this.x + this.maxSpaceInBetween);
  }
}