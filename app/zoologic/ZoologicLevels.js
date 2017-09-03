export const DIFFICULTY = {BEGINNER: 'BEGINNER', INTERMEDIATE: 'INTERMEDIATE', ADVANCED: 'ADVANCED', EXPERT: 'EXPERT'};
export const MAX_LEVEL_NUMBER = 40;

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
    }
  ];

  static getLevelConfig(levelNumber) {
    return this.LEVELS[levelNumber - 1];
  }
}
