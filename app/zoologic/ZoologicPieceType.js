export default class ZoologicPieceType {

  constructor(knownType, unallowedAdjacence, allowedOnTop, image, backgroundColor) {
    this.knownType = knownType;
    this.unallowedAdjacence = unallowedAdjacence;
    this.allowedOnTop = allowedOnTop;
    this.image = image;
    this.backgroundColor = backgroundColor;
  }

  canBeAdjacentTo(zoologicPieceType){
    console.log('this type ', this.knownType);
    console.log('can be adjacent to? ');
    console.log('received type ', zoologicPieceType.knownType);
    let result = !this.unallowedAdjacence.includes(zoologicPieceType.knownType);
    console.log(result);
    return result;
  }

  allowsOnTop(zoologicPieceType){
    console.log('this type ', this.knownType);
    console.log('allows on top? ');
    console.log('received type ', zoologicPieceType.knownType);
    let result = this.allowedOnTop.includes(zoologicPieceType.knownType);
    console.log(result);
    return result;
  }

};


