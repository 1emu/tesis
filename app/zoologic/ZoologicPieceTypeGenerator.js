import ZoologicPieceType from './ZoologicPieceType';
import ZoologicImage from './ZoologicImage';
import {KNOWN_TYPE} from './ZoologicKnownType';

export default class ZoologicPieceTypeGenerator {

  static MOUSE() {
    return new ZoologicPieceType(KNOWN_TYPE.MOUSE, [KNOWN_TYPE.CHEESE], [], ZoologicImage.for(KNOWN_TYPE.MOUSE), 'red');
  }

  static CAT() {
    return new ZoologicPieceType(KNOWN_TYPE.CAT, [KNOWN_TYPE.FISH, KNOWN_TYPE.MOUSE, KNOWN_TYPE.DOG, KNOWN_TYPE.BULLDOG], [], ZoologicImage.for(KNOWN_TYPE.CAT), 'green');
  }

  static DOG() {
    return new ZoologicPieceType(KNOWN_TYPE.DOG, [KNOWN_TYPE.BONE, KNOWN_TYPE.CAT, KNOWN_TYPE.BULLDOG], [], ZoologicImage.for(KNOWN_TYPE.DOG), 'orange');
  }

  static BULLDOG() {
    return new ZoologicPieceType(KNOWN_TYPE.BULLDOG, [KNOWN_TYPE.BONE, KNOWN_TYPE.CAT, KNOWN_TYPE.DOG], [], ZoologicImage.for(KNOWN_TYPE.BULLDOG), 'orange');
  }

  static CHEESE() {
    return new ZoologicPieceType(KNOWN_TYPE.CHEESE, [KNOWN_TYPE.MOUSE], [], ZoologicImage.for(KNOWN_TYPE.CHEESE), 'red');
  }

  static FISH() {
    return new ZoologicPieceType(KNOWN_TYPE.FISH, [KNOWN_TYPE.CAT], [], ZoologicImage.for(KNOWN_TYPE.FISH), 'green');
  }

  static BONE() {
    return new ZoologicPieceType(KNOWN_TYPE.BONE, [KNOWN_TYPE.DOG, KNOWN_TYPE.BULLDOG], [], ZoologicImage.for(KNOWN_TYPE.BONE), 'orange');
  }

  static BLANK() {
    return new ZoologicPieceType(KNOWN_TYPE.BLANK, [], Object.keys(KNOWN_TYPE), ZoologicImage.for(KNOWN_TYPE.BLANK), 'white');
  }

  static BULL() {
    return new ZoologicPieceType(KNOWN_TYPE.BULL, [], [KNOWN_TYPE.CHEESE, KNOWN_TYPE.FISH, KNOWN_TYPE.BONE], ZoologicImage.for(KNOWN_TYPE.BULL), 'cyan');
  }

  static ANTS() {
    return new ZoologicPieceType(KNOWN_TYPE.ANTS, [], [KNOWN_TYPE.MOUSE, KNOWN_TYPE.CAT, KNOWN_TYPE.DOG, KNOWN_TYPE.BULLDOG], ZoologicImage.for(KNOWN_TYPE.ANTS), 'pink');
  }

}
