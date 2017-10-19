export const DIFFICULTY = {BEGINNER: 'BEGINNER', EASY: 'EASY', INTERMEDIATE: 'INTERMEDIATE', ADVANCED: 'ADVANCED', EXPERT: 'EXPERT'};
//TODO Remove easy difficulty

export const MAX_LEVEL_NUMBER = 40;

export default class RushHourLevels {

  static LEVELS = [
    {
      levelNumber: 1,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vt', color: 'yellow', x: 5, y: 0},
        {tipo: 'vt', color: 'purple', x: 0, y: 1},
        {tipo: 'vt', color: 'blue', x: 3, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'orange', x: 0, y: 4},
        {tipo: 'hc', color: 'blue', x: 4, y: 4},
        {tipo: 'ht', color: 'green', x: 2, y: 5}
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 2,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 0, y: 0},
        {tipo: 'ht', color: 'yellow', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 1},
        {tipo: 'vt', color: 'purple', x: 5, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'blue', x: 4, y: 2},
        {tipo: 'ht', color: 'blue', x: 0, y: 3},
        {tipo: 'vc', color: 'pink', x: 2, y: 4},
        {tipo: 'hc', color: 'purple', x: 4, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 0, y: 5},
        {tipo: 'hc', color: 'black', x: 3, y: 5}
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 3,
      vehiclesConfiguration: [
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vt', color: 'yellow', x: 3, y: 2},
        {tipo: 'hc', color: 'green', x: 1, y: 3},
        {tipo: 'vt', color: 'purple', x: 5, y: 3},
        {tipo: 'vc', color: 'orange', x: 1, y: 4},
        {tipo: 'hc', color: 'blue', x: 2, y: 5}
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 4,
      vehiclesConfiguration: [
        {tipo: 'vt', color: 'yellow', x: 0, y: 0},
        {tipo: 'vt', color: 'purple', x: 3, y: 0},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'green', x: 2, y: 3},
        {tipo: 'ht', color: 'blue', x: 3, y: 3},
        {tipo: 'vc', color: 'orange', x: 5, y: 4},
        {tipo: 'ht', color: 'green', x: 2, y: 5}
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 5,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vt', color: 'yellow', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 5, y: 0},
        {tipo: 'vt', color: 'purple', x: 0, y: 1},
        {tipo: 'vt', color: 'blue', x: 4, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'black', x: 5, y: 2},
        {tipo: 'ht', color: 'green', x: 1, y: 3},
        {tipo: 'vc', color: 'pink', x: 1, y: 4},
        {tipo: 'hc', color: 'purple', x: 4, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 4, y: 5},
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 6,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 0},
        {tipo: 'hc', color: 'blue', x: 0, y: 1},
        {tipo: 'vt', color: 'yellow', x: 4, y: 1},
        {tipo: 'vt', color: 'purple', x: 5, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vt', color: 'blue', x: 3, y: 2},
        {tipo: 'hc', color: 'pink', x: 0, y: 3},
        {tipo: 'vc', color: 'purple', x: 2, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 0, y: 4},
        {tipo: 'ht', color: 'green', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 7,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 1, y: 0},
        {tipo: 'hc', color: 'orange', x: 2, y: 0},
        {tipo: 'vc', color: 'blue', x: 4, y: 0},
        {tipo: 'vc', color: 'pink', x: 5, y: 0},
        {tipo: 'vc', color: 'purple', x: 3, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'dkgreen', x: 5, y: 2},
        {tipo: 'hc', color: 'yellow', x: 2, y: 3},
        {tipo: 'vc', color: 'brown', x: 3, y: 4}
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 8,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 3, y: 0},
        {tipo: 'vt', color: 'yellow', x: 5, y: 0},
        {tipo: 'hc', color: 'orange', x: 2, y: 1},
        {tipo: 'vc', color: 'blue', x: 4, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'pink', x: 2, y: 2},
        {tipo: 'vc', color: 'purple', x: 3, y: 2},
        {tipo: 'hc', color: 'dkgreen', x: 0, y: 3},
        {tipo: 'hc', color: 'black', x: 4, y: 3},
        {tipo: 'hc', color: 'brown', x: 0, y: 4},
        {tipo: 'vc', color: 'yellow', x: 2, y: 4},
        {tipo: 'ht', color: 'purple', x: 3, y: 4},
        {tipo: 'hc', color: 'moss', x: 0, y: 5},
        {tipo: 'ht', color: 'blue', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 9,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 1, y: 0},
        {tipo: 'hc', color: 'orange', x: 2, y: 0},
        {tipo: 'hc', color: 'blue', x: 4, y: 0},
        {tipo: 'vc', color: 'pink', x: 3, y: 1},
        {tipo: 'hc', color: 'purple', x: 4, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vt', color: 'yellow', x: 4, y: 2},
        {tipo: 'vc', color: 'dkgreen', x: 5, y: 2},
        {tipo: 'vt', color: 'purple', x: 0, y: 3},
        {tipo: 'ht', color: 'blue', x: 1, y: 3},
        {tipo: 'vc', color: 'black', x: 2, y: 4},
        {tipo: 'vc', color: 'brown', x: 5, y: 4},
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 10,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vc', color: 'orange', x: 2, y: 0},
        {tipo: 'hc', color: 'blue', x: 4, y: 0},
        {tipo: 'hc', color: 'pink', x: 0, y: 1},
        {tipo: 'vt', color: 'yellow', x: 5, y: 1},
        {tipo: 'vt', color: 'purple', x: 0, y: 2},
        {tipo: 'wc', x: 2, y: 2},
        {tipo: 'ht', color: 'blue', x: 1, y: 3},
        {tipo: 'vc', color: 'purple', x: 3, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 4, y: 4},
        {tipo: 'hc', color: 'black', x: 0, y: 5},
        {tipo: 'hc', color: 'brown', x: 4, y: 5},
      ],
      difficulty: DIFFICULTY.BEGINNER
    },
    {
      levelNumber: 11,
      vehiclesConfiguration: [
        {tipo: 'vt', color: 'yellow', x: 0, y: 0},
        {tipo: 'hc', color: 'green', x: 1, y: 0},
        {tipo: 'vt', color: 'purple', x: 3, y: 0},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'orange', x: 2, y: 3},
        {tipo: 'ht', color: 'blue', x: 3, y: 3},
        {tipo: 'vc', color: 'purple', x: 5, y: 4},
        {tipo: 'ht', color: 'green', x: 2, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 12,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 0, y: 0},
        {tipo: 'hc', color: 'orange', x: 1, y: 0},
        {tipo: 'vt', color: 'yellow', x: 5, y: 0},
        {tipo: 'vt', color: 'purple', x: 2, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'ht', color: 'blue', x: 3, y: 3},
        {tipo: 'vc', color: 'blue', x: 4, y: 4},
        {tipo: 'ht', color: 'green', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 13,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'hc', color: 'orange', x: 2, y: 0},
        {tipo: 'vc', color: 'blue', x: 4, y: 0},
        {tipo: 'vc', color: 'pink', x: 2, y: 1},
        {tipo: 'vt', color: 'yellow', x: 5, y: 1},
        {tipo: 'vc', color: 'purple', x: 1, y: 2},
        {tipo: 'wc', x: 3, y: 2},
        {tipo: 'vt', color: 'purple', x: 0, y: 3},
        {tipo: 'hc', color: 'dkgreen', x: 3, y: 3},
        {tipo: 'vc', color: 'black', x: 3, y: 4},
        {tipo: 'hc', color: 'brown', x: 4, y: 4},
        {tipo: 'hc', color: 'yellow', x: 1, y: 5},
        {tipo: 'hc', color: 'moss', x: 4, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 14,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vc', color: 'orange', x: 2, y: 0},
        {tipo: 'hc', color: 'blue', x: 4, y: 1},
        {tipo: 'vc', color: 'pink', x: 0, y: 2},
        {tipo: 'vc', color: 'purple', x: 1, y: 2},
        {tipo: 'wc', x: 2, y: 2},
        {tipo: 'vc', color: 'dkgreen', x: 4, y: 2},
        {tipo: 'vc', color: 'black', x: 5, y: 2},
        {tipo: 'hc', color: 'grey', x: 2, y: 3},
        {tipo: 'vc', color: 'yellow', x: 2, y: 4},
        {tipo: 'hc', color: 'brown', x: 4, y: 4},
        {tipo: 'hc', color: 'moss', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 15,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 1, y: 0},
        {tipo: 'hc', color: 'orange', x: 3, y: 0},
        {tipo: 'hc', color: 'blue', x: 0, y: 1},
        {tipo: 'hc', color: 'pink', x: 2, y: 1},
        {tipo: 'vt', color: 'yellow', x: 4, y: 1},
        {tipo: 'vt', color: 'purple', x: 5, y: 1},
        {tipo: 'vt', color: 'blue', x: 0, y: 2},
        {tipo: 'vt', color: 'green', x: 1, y: 2},
        {tipo: 'wc', x: 2, y: 2},
        {tipo: 'vc', color: 'purple', x: 2, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 3, y: 3},
        {tipo: 'hc', color: 'black', x: 4, y: 4},
        {tipo: 'hc', color: 'brown', x: 1, y: 5},
        {tipo: 'hc', color: 'yellow', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 16,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'hc', color: 'orange', x: 2, y: 0},
        {tipo: 'vc', color: 'blue', x: 4, y: 0},
        {tipo: 'vt', color: 'yellow', x: 5, y: 0},
        {tipo: 'vc', color: 'pink', x: 0, y: 1},
        {tipo: 'hc', color: 'purple', x: 2, y: 1},
        {tipo: 'vc', color: 'dkgreen', x: 1, y: 2},
        {tipo: 'vt', color: 'purple', x: 2, y: 2},
        {tipo: 'wc', x: 3, y: 2},
        {tipo: 'ht', color: 'blue', x: 3, y: 3},
        {tipo: 'hc', color: 'black', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 17,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 0, y: 0},
        {tipo: 'ht', color: 'yellow', x: 1, y: 0},
        {tipo: 'hc', color: 'orange', x: 2, y: 1},
        {tipo: 'hc', color: 'blue', x: 4, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'pink', x: 2, y: 2},
        {tipo: 'hc', color: 'purple', x: 0, y: 3},
        {tipo: 'vt', color: 'purple', x: 3, y: 3},
        {tipo: 'ht', color: 'blue', x: 0, y: 4},
        {tipo: 'vc', color: 'dkgreen', x: 4, y: 4},
        {tipo: 'vc', color: 'black', x: 5, y: 4},
        {tipo: 'ht', color: 'green', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 18,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vc', color: 'orange', x: 2, y: 0},
        {tipo: 'vt', color: 'yellow', x: 3, y: 0},
        {tipo: 'hc', color: 'blue', x: 0, y: 1},
        {tipo: 'vt', color: 'purple', x: 0, y: 2},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'ht', color: 'blue', x: 1, y: 3},
        {tipo: 'hc', color: 'pink', x: 1, y: 4},
        {tipo: 'ht', color: 'green', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 19,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 2, y: 0},
        {tipo: 'hc', color: 'orange', x: 3, y: 0},
        {tipo: 'vc', color: 'brown', x: 4, y: 1},
        {tipo: 'vc', color: 'pink', x: 1, y: 2},
        {tipo: 'wc', x: 2, y: 2},
        {tipo: 'hc', color: 'purple', x: 2, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 4, y: 3},
        {tipo: 'ht', color: 'yellow', x: 1, y: 4},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 20,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 0, y: 0},
        {tipo: 'ht', color: 'yellow', x: 3, y: 0},
        {tipo: 'hc', color: 'orange', x: 1, y: 1},
        {tipo: 'vc', color: 'blue', x: 3, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'pink', x: 2, y: 2},
        {tipo: 'vt', color: 'purple', x: 5, y: 2},
        {tipo: 'vc', color: 'purple', x: 2, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 3, y: 4},
        {tipo: 'ht', color: 'blue', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.INTERMEDIATE
    },
    {
      levelNumber: 21,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vc', color: 'orange', x: 2, y: 0},
        {tipo: 'vt', color: 'yellow', x: 3, y: 0},
        {tipo: 'vt', color: 'purple', x: 0, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'ht', color: 'blue', x: 1, y: 3},
        {tipo: 'ht', color: 'green', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 22,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 2, y: 0},
        {tipo: 'ht', color: 'yellow', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 0, y: 1},
        {tipo: 'vt', color: 'purple', x: 3, y: 1},
        {tipo: 'hc', color: 'blue', x: 4, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'pink', x: 1, y: 3},
        {tipo: 'hc', color: 'purple', x: 4, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 0, y: 4},
        {tipo: 'hc', color: 'black', x: 2, y: 4},
        {tipo: 'vc', color: 'brown', x: 5, y: 4},
        {tipo: 'ht', color: 'blue', x: 1, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 23,
      vehiclesConfiguration: [
        {tipo: 'ht', color: 'yellow', x: 2, y: 0},
        {tipo: 'vt', color: 'purple', x: 5, y: 0},
        {tipo: 'vc', color: 'green', x: 2, y: 1},
        {tipo: 'hc', color: 'orange', x: 3, y: 1},
        {tipo: 'wc', x: 3, y: 2},
        {tipo: 'vc', color: 'blue', x: 2, y: 3},
        {tipo: 'vc', color: 'pink', x: 3, y: 3},
        {tipo: 'hc', color: 'purple', x: 4, y: 3},
        {tipo: 'hc', color: 'dkgreen', x: 4, y: 4},
        {tipo: 'ht', color: 'blue', x: 2, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 24,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 2, y: 0},
        {tipo: 'hc', color: 'orange', x: 3, y: 0},
        {tipo: 'vc', color: 'blue', x: 1, y: 1},
        {tipo: 'vc', color: 'pink', x: 0, y: 2},
        {tipo: 'wc', x: 2, y: 2},
        {tipo: 'vc', color: 'purple', x: 4, y: 2},
        {tipo: 'hc', color: 'dkgreen', x: 1, y: 3},
        {tipo: 'ht', color: 'yellow', x: 0, y: 4},
        {tipo: 'vc', color: 'black', x: 4, y: 4},
        {tipo: 'hc', color: 'brown', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 25,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vc', color: 'orange', x: 2, y: 0},
        {tipo: 'hc', color: 'blue', x: 4, y: 0},
        {tipo: 'hc', color: 'pink', x: 0, y: 1},
        {tipo: 'vt', color: 'yellow', x: 5, y: 1},
        {tipo: 'vt', color: 'purple', x: 0, y: 2},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'purple', x: 4, y: 2},
        {tipo: 'ht', color: 'blue', x: 1, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 1, y: 4},
        {tipo: 'vc', color: 'black', x: 3, y: 4},
        {tipo: 'hc', color: 'brown', x: 4, y: 4},
        {tipo: 'hc', color: 'yellow', x: 4, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 26,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 1, y: 0},
        {tipo: 'ht', color: 'yellow', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 0, y: 1},
        {tipo: 'vc', color: 'blue', x: 3, y: 1},
        {tipo: 'vt', color: 'purple', x: 4, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vc', color: 'pink', x: 5, y: 2},
        {tipo: 'vc', color: 'purple', x: 0, y: 3},
        {tipo: 'ht', color: 'green', x: 1, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 2, y: 4},
        {tipo: 'vc', color: 'black', x: 5, y: 4},
        {tipo: 'hc', color: 'brown', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 27,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 0, y: 0},
        {tipo: 'hc', color: 'orange', x: 1, y: 0},
        {tipo: 'vt', color: 'yellow', x: 3, y: 0},
        {tipo: 'hc', color: 'blue', x: 1, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'pink', x: 2, y: 2},
        {tipo: 'vt', color: 'purple', x: 5, y: 2},
        {tipo: 'hc', color: 'purple', x: 3, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 2, y: 4},
        {tipo: 'ht', color: 'green', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 28,
      vehiclesConfiguration: [
        {tipo: 'ht', color: 'yellow', x: 0, y: 0},
        {tipo: 'vc', color: 'green', x: 3, y: 0},
        {tipo: 'vt', color: 'purple', x: 2, y: 1},
        {tipo: 'hc', color: 'orange', x: 4, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'blue', x: 0, y: 3},
        {tipo: 'vc', color: 'pink', x: 1, y: 3},
        {tipo: 'hc', color: 'purple', x: 3, y: 3},
        {tipo: 'vt', color: 'blue', x: 5, y: 3},
        {tipo: 'ht', color: 'green', x: 2, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 0, y: 5},
        {tipo: 'hc', color: 'black', x: 2, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 29,
      vehiclesConfiguration: [
        {tipo: 'ht', color: 'yellow', x: 0, y: 0},
        {tipo: 'vt', color: 'purple', x: 4, y: 0},
        {tipo: 'vc', color: 'green', x: 2, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'orange', x: 5, y: 2},
        {tipo: 'vc', color: 'blue', x: 0, y: 3},
        {tipo: 'hc', color: 'pink', x: 1, y: 3},
        {tipo: 'hc', color: 'purple', x: 3, y: 3},
        {tipo: 'hc', color: 'dkgreen', x: 1, y: 4},
        {tipo: 'vc', color: 'black', x: 3, y: 4},
        {tipo: 'vc', color: 'brown', x: 5, y: 4},
        {tipo: 'ht', color: 'green', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 30,
      vehiclesConfiguration: [
        {tipo: 'vt', color: 'yellow', x: 0, y: 0},
        {tipo: 'vc', color: 'green', x: 2, y: 0},
        {tipo: 'ht', color: 'purple', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 1},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'hc', color: 'blue', x: 0, y: 3},
        {tipo: 'hc', color: 'pink', x: 2, y: 3},
        {tipo: 'vt', color: 'blue', x: 5, y: 3},
        {tipo: 'hc', color: 'purple', x: 0, y: 5},
        {tipo: 'hc', color: 'dkgreen', x: 2, y: 5},
      ],
      difficulty: DIFFICULTY.ADVANCED
    },
    {
      levelNumber: 31,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'ht', color: 'yellow', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 1},
        {tipo: 'hc', color: 'blue', x: 4, y: 1},
        {tipo: 'vc', color: 'pink', x: 0, y: 2},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'vt', color: 'purple', x: 5, y: 2},
        {tipo: 'vt', color: 'blue', x: 2, y: 3},
        {tipo: 'hc', color: 'purple', x: 3, y: 3},
        {tipo: 'hc', color: 'dkgreen', x: 0, y: 4},
        {tipo: 'ht', color: 'green', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 32,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vt', color: 'yellow', x: 2, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 0},
        {tipo: 'hc', color: 'blue', x: 4, y: 0},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'pink', x: 0, y: 3},
        {tipo: 'hc', color: 'purple', x: 1, y: 3},
        {tipo: 'hc', color: 'dkgreen', x: 3, y: 3},
        {tipo: 'vt', color: 'purple', x: 5, y: 3},
        {tipo: 'vc', color: 'moss', x: 3, y: 4},
        {tipo: 'hc', color: 'brown', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 33,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 1, y: 0},
        {tipo: 'vt', color: 'green', x: 2, y: 0},
        {tipo: 'hc', color: 'orange', x: 4, y: 0},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'yellow', x: 0, y: 3},
        {tipo: 'hc', color: 'pink', x: 1, y: 3},
        {tipo: 'hc', color: 'purple', x: 3, y: 3},
        {tipo: 'vt', color: 'purple', x: 5, y: 3},
        {tipo: 'hc', color: 'dkgreen', x: 1, y: 4},
        {tipo: 'vc', color: 'black', x: 3, y: 4},
        {tipo: 'vc', color: 'brown', x: 4, y: 4},
        {tipo: 'ht', color: 'blue', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 34,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 0, y: 0},
        {tipo: 'ht', color: 'green', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 1},
        {tipo: 'vt', color: 'purple', x: 5, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'blue', x: 4, y: 2},
        {tipo: 'ht', color: 'blue', x: 0, y: 3},
        {tipo: 'vc', color: 'pink', x: 3, y: 3},
        {tipo: 'vc', color: 'purple', x: 2, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 4, y: 4},
        {tipo: 'hc', color: 'yellow', x: 0, y: 5},
        {tipo: 'hc', color: 'brown', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 35,
      vehiclesConfiguration: [
        {tipo: 'vt', color: 'yellow', x: 2, y: 0},
        {tipo: 'hc', color: 'green', x: 3, y: 0},
        {tipo: 'vt', color: 'purple', x: 5, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'moss', x: 0, y: 3},
        {tipo: 'ht', color: 'blue', x: 1, y: 3},
        {tipo: 'hc', color: 'pink', x: 1, y: 4},
        {tipo: 'vc', color: 'purple', x: 3, y: 4},
        {tipo: 'vc', color: 'dkgreen', x: 4, y: 4},
        {tipo: 'hc', color: 'black', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 36,
      vehiclesConfiguration: [
        {tipo: 'vt', color: 'yellow', x: 0, y: 0},
        {tipo: 'ht', color: 'purple', x: 1, y: 0},
        {tipo: 'hc', color: 'green', x: 4, y: 0},
        {tipo: 'vc', color: 'orange', x: 1, y: 1},
        {tipo: 'hc', color: 'blue', x: 2, y: 1},
        {tipo: 'vt', color: 'blue', x: 5, y: 1},
        {tipo: 'wc', x: 2, y: 2},
        {tipo: 'ht', color: 'green', x: 0, y: 3},
        {tipo: 'vc', color: 'pink', x: 3, y: 3},
        {tipo: 'vc', color: 'purple', x: 2, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 4, y: 4},
        {tipo: 'hc', color: 'black', x: 0, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 37,
      vehiclesConfiguration: [
        {tipo: 'hc', color: 'green', x: 0, y: 0},
        {tipo: 'vc', color: 'orange', x: 2, y: 0},
        {tipo: 'hc', color: 'blue', x: 4, y: 0},
        {tipo: 'hc', color: 'pink', x: 0, y: 1},
        {tipo: 'vt', color: 'yellow', x: 4, y: 1},
        {tipo: 'vt', color: 'purple', x: 5, y: 1},
        {tipo: 'vt', color: 'blue', x: 0, y: 2},
        {tipo: 'wc', x: 1, y: 2},
        {tipo: 'ht', color: 'green', x: 1, y: 3},
        {tipo: 'vc', color: 'purple', x: 3, y: 4},
        {tipo: 'hc', color: 'dkgreen', x: 4, y: 4},
        {tipo: 'hc', color: 'black', x: 0, y: 5},
        {tipo: 'hc', color: 'brown', x: 4, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 38,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 0, y: 0},
        {tipo: 'ht', color: 'yellow', x: 3, y: 0},
        {tipo: 'hc', color: 'orange', x: 1, y: 1},
        {tipo: 'vc', color: 'blue', x: 3, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'pink', x: 2, y: 2},
        {tipo: 'vt', color: 'green', x: 5, y: 2},
        {tipo: 'hc', color: 'purple', x: 3, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 2, y: 4},
        {tipo: 'hc', color: 'black', x: 3, y: 4},
        {tipo: 'ht', color: 'blue', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: 39,
      vehiclesConfiguration: [
        {tipo: 'vc', color: 'green', x: 2, y: 0},
        {tipo: 'ht', color: 'yellow', x: 3, y: 0},
        {tipo: 'vc', color: 'orange', x: 3, y: 1},
        {tipo: 'wc', x: 0, y: 2},
        {tipo: 'vc', color: 'blue', x: 2, y: 2},
        {tipo: 'vt', color: 'green', x: 5, y: 2},
        {tipo: 'hc', color: 'pink', x: 0, y: 3},
        {tipo: 'hc', color: 'purple', x: 3, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 0, y: 4},
        {tipo: 'vc', color: 'black', x: 1, y: 4},
        {tipo: 'hc', color: 'brown', x: 2, y: 4},
        {tipo: 'hc', color: 'yellow', x: 2, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
    {
      levelNumber: MAX_LEVEL_NUMBER,
      vehiclesConfiguration: [
        {tipo: 'vt', color: 'yellow', x: 0, y: 0},
        {tipo: 'hc', color: 'green', x: 1, y: 0},
        {tipo: 'vc', color: 'orange', x: 4, y: 0},
        {tipo: 'vc', color: 'blue', x: 1, y: 1},
        {tipo: 'vc', color: 'pink', x: 2, y: 1},
        {tipo: 'vt', color: 'purple', x: 5, y: 1},
        {tipo: 'wc', x: 3, y: 2},
        {tipo: 'ht', color: 'blue', x: 0, y: 3},
        {tipo: 'vc', color: 'purple', x: 3, y: 3},
        {tipo: 'vc', color: 'dkgreen', x: 2, y: 4},
        {tipo: 'hc', color: 'black', x: 4, y: 4},
        {tipo: 'hc', color: 'brown', x: 0, y: 5},
        {tipo: 'hc', color: 'yellow', x: 3, y: 5},
      ],
      difficulty: DIFFICULTY.EXPERT
    },
  ];

  static getLevelConfig(levelNumber) {
    return this.LEVELS[levelNumber - 1];
  }
}
