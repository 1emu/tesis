import React, {Component} from 'react';
import {View} from 'react-native';
import VictoryGardenView from './VictoryGardenView';
import CuadraditosView from './CuadraditosView';
import BumpersView from './BumpersView';
import Metrics from '../../Metrics';


export default class TableroView extends Component {
  constructor(props) {
    super(props);
    this.tablero = props.tablero;
  }

  render() {
    let width = Metrics.BOARD_WIDTH;
    let height = Metrics.BOARD_HEIGHT;
    let boardMargin = Metrics.BOARD_MARGIN;
    let outerHeight = Metrics.BOARD_HEIGHT + boardMargin * 2;
    let boardMarginTop = Metrics.BOARD_MARGIN_TOP;

    return (
      <View style={{backgroundColor: 'grey', height: outerHeight, width: width, top: boardMarginTop}}>
        <View style={{backgroundColor: 'lightgrey', height: height, width: width, top: boardMargin, left: boardMargin}}>
          <VictoryGardenView key='victoryGarden' victoryGarden={this.tablero.victoryGarden}/>
          <BumpersView bumpers={this.tablero.bumpers} />
          <CuadraditosView cuadraditos={this.tablero.cuadraditos} />
        </View>
      </View>
    )
  }
}


