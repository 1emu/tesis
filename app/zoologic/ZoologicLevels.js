export const DIFFICULTY = {BEGINNER: 'BEGINNER', EASY: 'EASY', INTERMEDIATE: 'INTERMEDIATE', ADVANCED: 'ADVANCED', EXPERT: 'EXPERT'};
export const MAX_LEVEL_NUMBER = 12;

export default class ZoologicLevels {

  static LEVELS = [
    {
      levelNumber: 1,
      squares:
      '----------' +
      '----------' +
      '-----XXFF-' +
      '-----XXFF-' +
      '-CCXX-----' +
      '-CCXX-----' +
      '----------' +
      '----------' +
      '----------' +
      '----------',
      pieces: ['F', 'C'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 2,
      squares:
      '----------' +
      '----------' +
      '-XX-------' +
      '-XX-------' +
      '---XXXXDD-' +
      '---XXXXDD-' +
      '----------' +
      '----------' +
      '----------' +
      '----------',
      pieces: ['D', 'D', 'O'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 3,
      squares:
      '----------' +
      '----------' +
      '-----HH---' +
      '-----HH---' +
      '-----XX---' +
      '-----XX---' +
      '---XXXX---' +
      '---XXXX---' +
      '----------' +
      '----------',
      pieces: ['M', 'O', 'C'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 4,
      squares:
      '----------' +
      '----------' +
      '--HHXX----' +
      '--HHXX----' +
      '--XXXXXX--' +
      '--XXXXXX--' +
      '----------' +
      '----------' +
      '----------' +
      '----------',
      pieces: ['C', 'C', 'O', 'M'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 5,
      squares:
      '----------' +
      '----------' +
      '----XXXX--' +
      '----XXXX--' +
      '--XXXXOO--' +
      '--XXXXOO--' +
      '----------' +
      '----------' +
      '----------' +
      '----------',
      pieces: ['O', 'C', 'D', 'M'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 6,
      squares:
      '----------' +
      '----------' +
      '----XX----' +
      '----XX----' +
      '----XX----' +
      '----XX----' +
      '----XX----' +
      '----XX----' +
      '----XX----' +
      '----XX----',
      pieces: ['C', 'O', 'M', 'D'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 7,
      squares:
      '----------' +
      '----------' +
      '--XXXXXX--' +
      '--XXXXXX--' +
      '----XX----' +
      '----XX----' +
      '----------' +
      '----------' +
      '----------' +
      '----------',
      pieces: ['H', 'H', 'D', 'M'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 8,
      squares:
      '----------' +
      '----------' +
      '--DDXXFF--' +
      '--DDXXFF--' +
      '--XXXXXX--' +
      '--XXXXXX--' +
      '----XX----' +
      '----XX----' +
      '----------' +
      '----------',
      pieces: ['F', 'M', 'O', 'O', 'C'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 9,
      squares:
      '----------' +
      '----------' +
      '---XXHH---' +
      '---XXHH---' +
      '--XXXXXX--' +
      '--XXXXXX--' +
      '----------' +
      '----------' +
      '----------' +
      '----------',
      pieces: ['D', 'D', 'M', 'H'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 10,
      squares:
      '----------' +
      '----------' +
      '--XXXX----' +
      '--XXXX----' +
      '--XXXX----' +
      '--XXXX----' +
      '----XX----' +
      '----XX----' +
      '----------' +
      '----------',
      pieces: ['O', 'C', 'C', 'H', 'D'],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 11,
      squares:
      '----------' +
      '--XX------' +
      '--XX------' +
      '--CCXX----' +
      '--CCXX----' +
      '----XXDD--' +
      '----XXDD--' +
      '------XX--' +
      '------XX--' +
      '----------',
      pieces: ['C', 'O', 'F', 'D'],
      difficulty: DIFFICULTY.EASY
    },
    {
      levelNumber: 12,
      squares:
      '----------' +
      '--MM------' +
      '--MM------' +
      '--XXXX----' +
      '--XXXX----' +
      '----XXXX--' +
      '----XXXX--' +
      '----------' +
      '----------' +
      '----------',
      pieces: ['D', 'F', 'O', 'C'],
      difficulty: DIFFICULTY.EASY
    },
  ];

  static getLevelConfig(levelNumber) {
    return this.LEVELS[levelNumber - 1];
  }
}
