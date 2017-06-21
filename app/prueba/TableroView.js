import React, {Component} from 'react';
import {View} from 'react-native';
import VictoryGardenView from './VictoryGardenView';
import {BOARD_HEIGHT, BOARD_WIDTH} from './Metrics';
import CuadraditosView from './CuadraditosView';
import BumpersView from './BumpersView';


export default class TableroView extends Component {
  constructor(props) {
    super(props);
    this.tablero = props.tablero;
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


