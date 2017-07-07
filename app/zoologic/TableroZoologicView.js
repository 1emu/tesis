import React, {Component} from 'react';
import {View} from 'react-native';
import Metrics from '../Metrics';
import style from './TableroZoologicStyle'
import Cuadradito from "./Cuadradito";
import CuadraditoView from "./CuadraditoView";

export default class TableroZoologicView extends Component {
  constructor(props) {
    super(props);
    this.iman1 = {x: 100, y: 200};
    this.iman2 = {x: 150, y: 200};
    this.iman3 = {x: 100, y: 250};
    this.imanes = [this.iman1, this.iman2, this.iman3];
    this.cuadradito = new Cuadradito('red', 0, 0, 50, 50, this.imanes);
    this.cuadradito2 = new Cuadradito('green', 0, 100, 50, 50, this.imanes);
  }

  render() {
    let width = Metrics.BOARD_WIDTH;
    let boardMargin = Metrics.ZOOLOGIC_SHAPE_BOARD_WIDTH;
    let outerHeight = Metrics.BOARD_HEIGHT + boardMargin * 3;
    return (
        <View style={style.container}>
          <View style={{backgroundColor: 'lightgrey', height: outerHeight, width: width, left: boardMargin}}>
            <View style={{backgroundColor: 'black', width: 5, height: 5, left: this.iman1.x, top: this.iman1.y, position: 'absolute'}}/>
            <View style={{backgroundColor: 'black', width: 5, height: 5, left: this.iman2.x, top: this.iman2.y, position: 'absolute'}}/>
            <View style={{backgroundColor: 'black', width: 5, height: 5, left: this.iman3.x, top: this.iman3.y, position: 'absolute'}}/>
            <CuadraditoView cuadradito={this.cuadradito} color='red'/>
            <CuadraditoView cuadradito={this.cuadradito2} color='green'/>
          </View>
        </View>
    )

    let boardMarginTop = Metrics.BOARD_MARGIN_TOP;
  }
}


