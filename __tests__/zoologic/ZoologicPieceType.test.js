import ZoologicPieceTypeGenerator from '../../app/zoologic/model/ZoologicPieceTypeGenerator';

describe('ZoologicPieceType Test', () => {

  let testSubjects = [
    {
      typeUnderTest: ZoologicPieceTypeGenerator.MOUSE(),
      unallowedAdjacence: [
        ZoologicPieceTypeGenerator.CHEESE(),
        ZoologicPieceTypeGenerator.CAT()
      ],
      allowedOnTop: []
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.CAT(),
      unallowedAdjacence: [
        ZoologicPieceTypeGenerator.FISH(),
        ZoologicPieceTypeGenerator.MOUSE(),
        ZoologicPieceTypeGenerator.DOG(),
        ZoologicPieceTypeGenerator.BULLDOG()
      ],
      allowedOnTop: []
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.DOG(),
      unallowedAdjacence: [
        ZoologicPieceTypeGenerator.BONE(),
        ZoologicPieceTypeGenerator.CAT(),
        ZoologicPieceTypeGenerator.BULLDOG()
      ],
      allowedOnTop: []
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.BULLDOG(),
      unallowedAdjacence: [
        ZoologicPieceTypeGenerator.BONE(),
        ZoologicPieceTypeGenerator.CAT(),
        ZoologicPieceTypeGenerator.DOG(),
        ZoologicPieceTypeGenerator.BULLDOG()
      ],
      allowedOnTop: []
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.CHEESE(),
      unallowedAdjacence: [ZoologicPieceTypeGenerator.MOUSE()],
      allowedOnTop: []
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.FISH(),
      unallowedAdjacence: [ZoologicPieceTypeGenerator.CAT()],
      allowedOnTop: []
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.BONE(),
      unallowedAdjacence: [ZoologicPieceTypeGenerator.DOG(), ZoologicPieceTypeGenerator.BULLDOG()],
      allowedOnTop: []
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.BLANK(),
      unallowedAdjacence: [],
      allowedOnTop: ZoologicPieceTypeGenerator.ALL()
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.BULL(),
      unallowedAdjacence: [],
      allowedOnTop: [ZoologicPieceTypeGenerator.CHEESE(), ZoologicPieceTypeGenerator.FISH(), ZoologicPieceTypeGenerator.BONE()]
    },
    {
      typeUnderTest: ZoologicPieceTypeGenerator.ANTS(),
      unallowedAdjacence: [],
      allowedOnTop: [ZoologicPieceTypeGenerator.MOUSE(), ZoologicPieceTypeGenerator.CAT(), ZoologicPieceTypeGenerator.DOG(), ZoologicPieceTypeGenerator.BULLDOG()]
    }
  ];


  testSubjects.forEach(typeProperties => {
    let typeUnderTest = typeProperties.typeUnderTest;
    let unallowedAdjacence = typeProperties.unallowedAdjacence;
    let allowedOnTop = typeProperties.allowedOnTop;

    describe(typeUnderTest.knownType, () => {

      test('cant be adjacent to anything on its unallowed adjacence', () => {
        unallowedAdjacence.forEach(otherPieceType =>
          expect(typeUnderTest.canBeAdjacentTo(otherPieceType)).toBe(false)
        );
      });

      test('can be adjacent to anything that is not in its unallowed adjacence', () => {
        const allowedAdjacence = ZoologicPieceTypeGenerator.ALLBUT(unallowedAdjacence);
        allowedAdjacence.forEach(otherPieceType =>
          expect(typeUnderTest.canBeAdjacentTo(otherPieceType)).toBe(true)
        );
      });

      test('only allows on top what is specified', () => {
        ZoologicPieceTypeGenerator.ALL().forEach(otherPieceType =>
          expect(typeUnderTest.allowsOnTop(allowedOnTop)).toBe(false)
        );
      });

    });
  });

});

