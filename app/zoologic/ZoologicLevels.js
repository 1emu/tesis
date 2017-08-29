export const DIFFICULTY = {BEGINNER: 'BEGINNER', INTERMEDIATE: 'INTERMEDIATE', ADVANCED: 'ADVANCED', EXPERT: 'EXPERT'};
export const MAX_LEVEL_NUMBER = 40;

export default class ZoologicLevels {

  static LEVELS = [
    {
      levelNumber: 1,
      squares:
      'MXCXX' +
      'XDXBX' +
      'XXXXX' +
      'HXOXX' +
      'XXLXA'
      ,
      difficulty: DIFFICULTY.BEGINNER
    }
  ];

  static getLevelConfig(levelNumber) {
    return this.LEVELS[levelNumber - 1];
  }
}
