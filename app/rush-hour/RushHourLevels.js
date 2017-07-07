export const DIFFICULTY = {BEGINNER: 'BEGINNER', INTERMEDIATE: 'INTERMEDIATE', ADVANCED: 'ADVANCED', EXPERT: 'EXPERT'};
export const MAX_LEVEL_NUMBER = 40;

export default class RushHourLevels {

  static LEVELS = [
    {
      levelNumber: 1,
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
      configuracionDeAutitos: [
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
