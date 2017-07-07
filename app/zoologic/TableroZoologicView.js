import React, {Component} from 'react';
import {View} from 'react-native';
import Metrics from '../Metrics';
import style from './TableroZoologicStyle'

export default class TableroZoologicView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let width = Metrics.BOARD_WIDTH;
    let boardMargin = Metrics.ZOOLOGIC_SHAPE_BOARD_WIDTH;
    let outerHeight = Metrics.BOARD_HEIGHT + boardMargin * 3;
    let boardMarginTop = Metrics.BOARD_MARGIN_TOP;

    return (
      <View style={style.container}>
        <View style={{backgroundColor: 'lightgrey', height: outerHeight, width: width, left: boardMargin}}>
        </View>
      </View>
    )
  }
}


