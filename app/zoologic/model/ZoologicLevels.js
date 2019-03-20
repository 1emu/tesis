export const DIFFICULTY = {BEGINNER: 'BEGINNER', EASY: 'EASY', INTERMEDIATE: 'INTERMEDIATE', ADVANCED: 'ADVANCED', EXPERT: 'EXPERT'};
export const MAX_LEVEL_NUMBER = 60;

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
      '----AA----' +
      '----AA----' +
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
    {
        levelNumber: 13,
        squares:
        '----------' +
        '--XXXX----' +
        '--XXXX----' +
        '--MMXX----' +
        '--MMXX----' +
        '--XXXX----' +
        '--XXXX----' +
        '----------' +
        '----------' +
        '----------',
        pieces: ['D', 'D', 'D', 'H', 'H'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 14,
        squares:
        '----------' +
        '----DD----' +
        '----DD----' +
        '--MMXXXX--' +
        '--MMXXXX--' +
        '--DDXXXX--' +
        '--DDXXXX--' +
        '----MMDD--' +
        '----MMDD--' +
        '----------',
        pieces: ['M', 'O', 'D', 'H'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 15,
        squares:
        '----------' +
        '----------' +
        '----XXXX--' +
        '----XXXX--' +
        '--OOXXXX--' +
        '--OOXXXX--' +
        '-----XX---' +
        '-----XX---' +
        '----------' +
        '----------',
        pieces: ['O', 'H', 'M', 'D', 'D'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 16,
        squares:
        '----------' +
        '----------' +
        '----XXOO--' +
        '----XXOO--' +
        '--XXHHXX--' +
        '--XXHHXX--' +
        '--XX--XX--' +
        '--XX--XX--' +
        '----------' +
        '----------',
        pieces: ['D', 'M', 'H', 'O', 'M'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 17,
        squares:
        '----------' +
        '----------' +
        '----------' +
        '-HHXXOOXX-' +
        '-HHXXOOXX-' +
        '-XXMMXXDD-' +
        '-XXMMXXDD-' +
        '----------' +
        '----------' +
        '----------',
        pieces: ['D', 'O', 'M', 'H'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 18,
        squares:
        '----------' +
        '----------' +
        '--FFXXBB--' +
        '--FFXXBB--' +
        '--XX--XX--' +
        '--XX--XX--' +
        '----XXXX--' +
        '----XXXX--' +
        '----------' +
        '----------',
        pieces: ['B', 'M', 'C', 'M', 'O'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 19,
        squares:
        '----------' +
        '----------' +
        '----------' +
        '-XXXXXX---' +
        '-XXXXXXXX-' +
        '-XXCCOOXX-' +
        '-XXCCOO---' +
        '----------' +
        '----------' +
        '----------',
        pieces: ['D', 'H', 'H', 'O', 'M'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 20,
        squares:
        '----------' +
        '----------' +
        '--XXCC-HH-' +
        '--XXCC-HH-' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '----CCXX--' +
        '----CCXX--' +
        '----------' +
        '----------',
        pieces: ['M', 'O', 'O', 'H', 'H', 'D'],
        difficulty: DIFFICULTY.EASY
    },
    {
        levelNumber: 21,
        squares:
        '----------' +
        '----------' +
        '---XXXX---' +
        '---XXXX---' +
        '--OOXXXX--' +
        '--OOXXXX--' +
        '-----XXXX-' +
        '-----XXXX-' +
        '----------' +
        '----------',
        pieces: ['M', 'M', 'B', 'B', 'F', 'H'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 22,
        squares:
        '----------' +
        '----------' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '--FF--XX--' +
        '--FF--XX--' +
        '------XX--' +
        '------XX--' +
        '----------' +
        '----------',
        pieces: ['B', 'M', 'B', 'H', 'C'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 23,
        squares:
        '----XXHH--' +
        '----XXHH--' +
        '------XXDD' +
        '------XXDD' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        'DDXX------' +
        'DDXX------' +
        '--HHXX----' +
        '--HHXX----',
        pieces: ['M', 'D', 'O', 'M', 'O', 'D', 'M'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 24,
        squares:
        '----------' +
        '----HH----' +
        '-DD-HH----' +
        '-DDXXXX---' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '-OOXXXX---' +
        '-OO-MM----' +
        '-OO-MM----' +
        '----------',
        pieces: ['M', 'D', 'M', 'H', 'O', 'C'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 25,
        squares:
        '----------' +
        '----------' +
        '----XX----' +
        '----XX----' +
        '---XXXX---' +
        '---XXXX---' +
        '--XXMMXX--' +
        '--XXMMXX--' +
        '----------' +
        '----------',
        pieces: ['O', 'F', 'H', 'D', 'D'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 26,
        squares:
        '----------' +
        '----------' +
        '----MM----' +
        '----MM----' +
        '--XXXXCC--' +
        '--XXXXCC--' +
        '-XXXXXX---' +
        '-XXXXXX---' +
        '----------' +
        '----------',
        pieces: ['D', 'M', 'F', 'O', 'H'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 27,
        squares:
        '----------' +
        '----------' +
        '--MMXX----' +
        '--MMXX----' +
        '---XXXXDD-' +
        '---XXXXDD-' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '----------' +
        '----------',
        pieces: ['C', 'O', 'M', 'H', 'F', 'D'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 28,
        squares:
        '----------' +
        '---XX-----' +
        '---XX-----' +
        'OOXX------' +
        'OOXX------' +
        '-XXXXXXFF-' +
        '-XXXXXXFF-' +
        '------LL--' +
        '------LL--' +
        '----------',
        pieces: ['M', 'O', 'C', 'M', 'D', 'H'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 29,
        squares:
        '---XXXX---' +
        '---XXXX---' +
        '---DDXXHH-' +
        '---DDXXHH-' +
        '---XXXX---' +
        '---XXXX---' +
        '-HHXXDD---' +
        '-HHXXDD---' +
        '---XXXX---' +
        '---XXXX---',
        pieces: ['M', 'D', 'H', 'O', 'O', 'H', 'D', 'M'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 30,
        squares:
        '---XXXX---' +
        '---XXXX---' +
        '---MMXX---' +
        '---MMXX---' +
        '---XXXX---' +
        '---XXXX---' +
        '---MMXX---' +
        '---MMXX---' +
        '---XXXX---' +
        '---XXXX---',
        pieces: ['D', 'D', 'O', 'H', 'D', 'H', 'O', 'C'],
        difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
        levelNumber: 31,
        squares:
        '----------' +
        '-----HH---' +
        '-----HH---' +
        '---XXXXOO-' +
        '---XXXXOO-' +
        'CCXX--XX--' +
        'CCXX--XX--' +
        '-OOXXXX---' +
        '-OOXXXX---' +
        '----------',
        pieces: ['H', 'D', 'C', 'F', 'O', 'M'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 32,
        squares:
        '----------' +
        '----------' +
        '----DD----' +
        '--DDDDXX--' +
        '--DDXXXX--' +
        'XXXXXXXXXX' +
        'XXXXXXXXXX' +
        '----XX----' +
        '----------' +
        '----------',
        pieces: ['B', 'H', 'F', 'H', 'M', 'O', 'C'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 33,
        squares:
        '----------' +
        '----------' +
        '-CCXXXX---' +
        '-CCXXXX---' +
        '-XXXXOOXX-' +
        '-XXXXOOXX-' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '----------' +
        '----------',
        pieces: ['H', 'D', 'O', 'F', 'D', 'C', 'M', 'M', 'D'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 34,
        squares:
        '---XX-----' +
        '---XX-----' +
        '--XXXX----' +
        '--XXXX----' +
        '-BBXXXXBB-' +
        '-BBXXXXBB-' +
        '--XXXX----' +
        '--XXXX----' +
        '---XX-----' +
        '---XX-----',
        pieces: ['H', 'H', 'C', 'F', 'C', 'O', 'O', 'M'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 35,
        squares:
        '----------' +
        '--MM------' +
        '--MM------' +
        '-XXXXXX---' +
        '-XXXXXX---' +
        '-XXXXXX---' +
        '-XXXXXXBB-' +
        '-XXXXXXBB-' +
        '-XXXXXX---' +
        '----------',
        pieces: ['O', 'C', 'C', 'F', 'H', 'O', 'B', 'F', 'M'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 36,
        squares:
        '----------' +
        '----------' +
        '-------CC-' +
        '-XX--XXCC-' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '-XX--XX---' +
        '-OO--DD---' +
        '-OO--DD---' +
        '----------',
        pieces: ['D', 'M', 'F', 'O', 'H', 'C'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 37,
        squares:
        '----------' +
        '-XXXXXX---' +
        '-XXXXXX---' +
        '--XX--CC--' +
        '--XXXXCC--' +
        '--XXXXXX--' +
        '--XX--XX--' +
        '---XXAA---' +
        '---XXAA---' +
        '----------',
        pieces: ['M', 'M', 'M', 'D', 'O', 'O', 'H', 'C', 'H'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 38,
        squares:
        '----------' +
        '----------' +
        '----------' +
        '--XX----LL' +
        '--XXAAXXLL' +
        'OOXXAAXXXX' +
        'OOXX----XX' +
        '----------' +
        '----------' +
        '----------',
        pieces: ['F', 'M', 'D', 'H', 'O', 'C'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 39,
        squares:
        '----------' +
        '----------' +
        '-XXXX-----' +
        '-XXXX-----' +
        '-XXXXXXBB-' +
        '-XXXXXXBB-' +
        '-MMXX-----' +
        '-MMXX-----' +
        '----------' +
        '----------',
        pieces: ['C', 'O', 'H', 'F', 'B', 'M'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 40,
        squares:
        '----------' +
        '------DD--' +
        '------DD--' +
        '----XXXX--' +
        '--XXXXXX--' +
        '--XX-XXXX-' +
        '--XX-XXXX-' +
        '--XXXXAA--' +
        '----XXAA--' +
        '----------',
        pieces: ['D', 'D', 'M', 'H', 'O', 'M', 'C', 'O'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 41,
        squares:
        '----------' +
        '-------FF-' +
        '-XXXXXXFF-' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '-XXXXXX---' +
        '--BBXX----' +
        '--BBXX----' +
        '----------' +
        '----------',
        pieces: ['B', 'F', 'F', 'H', 'H', 'O', 'C', 'O'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 42,
        squares:
        '----------' +
        '---XXXX---' +
        '---XXXX---' +
        '--XXFFXX--' +
        '--XXFFXX--' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '--XX--XX--' +
        '--XX--XX--' +
        '----------',
        pieces: ['B', 'H', 'C', 'M', 'B', 'M', 'B', 'H', 'C'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 43,
        squares:
        '----------' +
        '----CC----' +
        '----CC----' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '-XXXXXX---' +
        '-XXXXXX---' +
        '----XXXX--' +
        '----XXXX--' +
        '----------',
        pieces: ['M', 'O', 'O', 'H', 'M', 'F', 'B', 'B'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 44,
        squares:
        '----------' +
        '----------' +
        '---XXXX---' +
        '---XXXX---' +
        '--XXAAXXXX' +
        'OOXXAAXXXX' +
        'OOXXXXXX--' +
        '--XXXXXX--' +
        '----------' +
        '----------',
        pieces: ['H', 'C', 'F', 'B', 'H', 'M', 'M', 'B', 'B'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 45,
        squares:
        '----------' +
        '---DDXX---' +
        '---DDXX---' +
        '--XX--XX--' +
        'XXXXXXXXXX' +
        'XXXXXXXXXX' +
        'XXXXXXXX--' +
        'XXXXXX----' +
        '--XX------' +
        '----------',
        pieces: ['B', 'F', 'M', 'M', 'B', 'B', 'F', 'D', 'H', 'H', 'C'],
        difficulty: DIFFICULTY.ADVANCED
    },
    {
        levelNumber: 46,
        squares:
        '----------' +
        '--DDXXXX--' +
        '--DDXXXX--' +
        '--XXOOXX--' +
        '--XXOOXX--' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '----XX----' +
        '----XX----' +
        '----------',
        pieces: ['F', 'D', 'F', 'H', 'D', 'H', 'C', 'C'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 47,
        squares:
        '----------' +
        '----------' +
        '--XXXXXXDD' +
        'XXXXXXXXDD' +
        'XXMMXXXX--' +
        'XXMMXXXX--' +
        'XXXXXX----' +
        'OOXXXX----' +
        'OO--------' +
        '----------',
        pieces: ['D', 'M', 'D', 'O', 'F', 'O', 'C', 'H', 'C'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 48,
        squares:
        '----------' +
        '-----XX---' +
        '-----XX---' +
        '-AAXXXXXX-' +
        '-AAXXXXXX-' +
        '---XXXX---' +
        '---XXXX---' +
        '-----AA---' +
        '-----AA---' +
        '----------',
        pieces: ['D', 'M', 'O', 'C', 'O', 'M', 'D', 'C'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 49,
        squares:
        '----------' +
        '----------' +
        '--LLXXXX--' +
        '--LLXXXX--' +
        '-XXXXXXHH-' +
        '-XXXXXXHH-' +
        'MMXXXXXX--' +
        'MMXXXXXX--' +
        '----------' +
        '----------',
        pieces: ['M', 'O', 'B', 'F', 'O', 'F', 'H', 'C', 'B'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 50,
        squares:
        '----------' +
        '----------' +
        '----------' +
        '-AAXXAAXX-' +
        '-AAXXAAXX-' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '----------' +
        '----------' +
        '----------',
        pieces: ['C', 'H', 'H', 'B', 'B', 'M', 'M', 'F'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 51,
        squares:
        '----------' +
        '----------' +
        '--XXDDXX--' +
        '--XXDDXX--' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '----------' +
        '----------',
        pieces: ['O', 'H', 'C', 'C', 'H', 'O', 'M', 'F', 'M'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 52,
        squares:
        '--XXXX----' +
        '--XXXX----' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '--XX-XX---' +
        '--XX-XX---' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '-----OO---' +
        '-----OO---',
        pieces: ['H', 'B', 'M', 'B', 'C', 'H', 'M', 'D', 'D', 'M'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 53,
        squares:
        '--FFXXOO--' +
        '--FFXXOO--' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '--XXOOXX--' +
        '--XXOOXX--' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '----HH----' +
        '----HH----',
        pieces: ['D', 'M', 'D', 'F', 'M', 'H', 'O', 'C', 'C'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 54,
        squares:
        '----------' +
        '----------' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '-XXBBXXXX-' +
        '-XXBBXXXX-' +
        '-XXXXXXCC-' +
        '-XXXXXXCC-' +
        '----------' +
        '----------',
        pieces: ['B', 'M', 'B', 'M', 'M', 'B', 'H', 'O', 'H', 'C'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 55,
        squares:
        '----------' +
        '----------' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        'XXXXXX----' +
        'XXXXXX----' +
        '----------' +
        '----------',
        pieces: ['M', 'F', 'B', 'M', 'F', 'H', 'B', 'H', 'C', 'C'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 56,
        squares:
        '----------' +
        '-XX-------' +
        '-XX-------' +
        '-XXXX-----' +
        '-XXXX-----' +
        '-XXXXXXFF-' +
        '-XXXXXXFF-' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '----------',
        pieces: ['B', 'M', 'D', 'D', 'B', 'H', 'H', 'O', 'C', 'O'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 57,
        squares:
        '----------' +
        '----------' +
        '------HH--' +
        '--XXXXHHFF' +
        'XXXXXXXXFF' +
        'XXXXXXXX--' +
        'XXXXXXXX--' +
        'XX-XX-XX--' +
        '---XX-----' +
        '----------',
        pieces: ['O', 'C', 'M', 'O', 'C', 'B', 'H', 'F', 'B'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 58,
        squares:
        '----------' +
        '-XXXXCC---' +
        '-XXXXCC---' +
        '-XXXXXX---' +
        '-XXXXXX---' +
        '---XXXXXX-' +
        '---XXXXXX-' +
        '---DDXXHH-' +
        '---DDXXHH-' +
        '----------',
        pieces: ['M', 'O', 'O', 'C', 'H', 'H', 'D', 'F', 'F'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 59,
        squares:
        '----CC----' +
        '----CC----' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '-XX-XX-XX-' +
        '-XX-XX-XX-' +
        '--XXXXXX--' +
        '--XXXXXX--' +
        '----BB----' +
        '----BB----',
        pieces: ['B', 'M', 'O', 'H', 'O', 'M', 'C', 'B', 'C', 'H'],
        difficulty: DIFFICULTY.EXPERT
    },
    {
        levelNumber: 60,
        squares:
        '----------' +
        '-XX----XX-' +
        '-XXHHXXXX-' +
        '-XXHHXXOO-' +
        '-XXXXXXOO-' +
        '-XXXXXXXX-' +
        '-XXXXXXXX-' +
        '-XXXXXX---' +
        '-XX-------' +
        '----------',
        pieces: ['C', 'H', 'F', 'B', 'B', 'M', 'O', 'F', 'B', 'C', 'M'],
        difficulty: DIFFICULTY.EXPERT
    },
  ];

  static getLevelConfig(levelNumber) {
    return this.LEVELS[levelNumber - 1];
  }
}
