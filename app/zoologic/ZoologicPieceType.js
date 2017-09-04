export default class ZoologicPieceType {

  constructor(knownType, unallowedAdjacence, allowedOnTop, image, backgroundColor) {
    this.knownType = knownType;
    this.unallowedAdjacence = unallowedAdjacence;
    this.allowedOnTop = allowedOnTop;
    this.image = image;
    this.backgroundColor = backgroundColor;
  }

  canBeAdjacentTo(zoologicPieceType){
    return !this.unallowedAdjacence.includes(zoologicPieceType.knownType);
  }

  allowsOnTop(zoologicPieceType){
    return this.allowedOnTop.includes(zoologicPieceType.knownType);
  }

  expectsAPieceOnTop() {
    return !(this.allowedOnTop.length === 0)
  }

};


