import React, {Component} from 'react';
import {View} from 'react-native';
import VictoryGardenView from './VictoryGardenView';
import CuadraditosView from './CuadraditosView';
import BumpersView from './BumpersView';
import Metrics from './Metrics';


export default class TableroView extends Component {
  constructor(props) {
    super(props);
    this.tablero = props.tablero;
  }

  render() {
    let height = Metrics.BOARD_HEIGHT;
    let width = Metrics.BOARD_WIDTH;
    let boardMarginTop = Metrics.BOARD_MARGIN_TOP;
    let boardMargin = Metrics.BOARD_MARGIN * 0.5;

    return (
      <View style={{backgroundColor: 'lightgrey', height: height, width: width, top: boardMarginTop, left: boardMargin}}>
        <VictoryGardenView key='victoryGarden' victoryGarden={this.tablero.victoryGarden}/>
        <BumpersView bumpers={this.tablero.bumpers} />
        <CuadraditosView cuadraditos={this.tablero.cuadraditos} />
      </View>
    )
  }
}


