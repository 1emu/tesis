import React, {Component} from 'react';
import {View} from 'react-native';
import VictoryGardenView from './VictoryGardenView';
import {BOARD_HEIGHT, BOARD_WIDTH} from './Metrics';
import CuadraditosView from './CuadraditosView';
import BumpersView from './BumpersView';
import InicializadorDeTablero from "./InicializadorDeTablero";


export default class TableroView extends Component {
  constructor(props) {
    super(props);
    let configDeTablero = [
      {tipo: 'hc', color: 'green', x: 0, y: 0},
      {tipo: 'vt', color: 'yellow', x: 5, y: 0},
      {tipo: 'vt', color: 'purple', x: 0, y: 1},
      {tipo: 'vt', color: 'blue', x: 3, y: 1},
      {tipo: 'wc', x: 1, y: 2},
      {tipo: 'vc', color: 'orange', x: 0, y: 4},
      {tipo: 'hc', color: 'blue', x: 4, y: 4},
      {tipo: 'ht', color: 'green', x: 2, y: 5}
    ];
    this.tablero = new InicializadorDeTablero(configDeTablero).obtenerTablero(props);
    this.metrics = props.metrics;
  }

  render() {
    let height = this.metrics.BOARD_HEIGHT;
    let width = this.metrics.BOARD_WIDTH;
    let boardMarginTop = this.metrics.BOARD_MARGIN_TOP;
    let boardMargin = this.metrics.BOARD_MARGIN/2;
    return (
      <View style={{backgroundColor: 'lightgrey', height: height, width: width, top: boardMarginTop, left: boardMargin}}>
        <VictoryGardenView key='victoryGarden' victoryGarden={this.tablero.victoryGarden}/>
        <BumpersView bumpers={this.tablero.bumpers} />
        <CuadraditosView cuadraditos={this.tablero.cuadraditos} />
      </View>
    )
  }
}


