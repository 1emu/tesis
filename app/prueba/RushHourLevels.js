export default class RushHourLevels {

  static LEVELS = [
    {levelNumber: 1, configuracionDeAutitos: [
      {tipo: 'hc', color: 'green', x: 0, y: 0},
      // {tipo: 'vt', color: 'yellow', x: 5, y: 0},
      // {tipo: 'vt', color: 'purple', x: 0, y: 1},
      // {tipo: 'vt', color: 'blue', x: 3, y: 1},
      {tipo: 'wc', x: 1, y: 2},
      {tipo: 'vc', color: 'orange', x: 0, y: 4},
      {tipo: 'hc', color: 'blue', x: 4, y: 4},
      {tipo: 'ht', color: 'green', x: 2, y: 5}
    ]},
    {levelNumber: 2, configuracionDeAutitos: [
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
    ]}
  ];

  static getLevelConfig(levelNumber) {
    return this.LEVELS[levelNumber - 1];
  }
}


