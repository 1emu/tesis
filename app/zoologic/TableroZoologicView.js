import React, {Component} from 'react';
import {View} from 'react-native';
import Metrics from '../Metrics';
import style from './TableroZoologicStyle'
import Cuadradito from "./Cuadradito";
import CuadraditoView from "./CuadraditoView";
import ShapeBar from './ShapeBar';
import ShapeBarView from './ShapeBarView';

export default class TableroZoologicView extends Component {
  constructor(props) {
    super(props);
    this.generarMagnetos();
    console.log(JSON.stringify(this.imanes));
    this.cuadradito = new Cuadradito('red', Metrics.ZOOLOGIC_SHAPE_BAR_PADDING, Metrics.ZOOLOGIC_SHAPE_BAR_PADDING, Metrics.TILE_SIZE, Metrics.TILE_SIZE, this.imanes);
    this.cuadradito2 = new Cuadradito('green', Metrics.ZOOLOGIC_SHAPE_BAR_PADDING, Metrics.TILE_SIZE + Metrics.ZOOLOGIC_SHAPE_BAR_PADDING * 2, Metrics.TILE_SIZE, Metrics.TILE_SIZE, this.imanes);
    this.cuadradito3 = new Cuadradito('green', Metrics.ZOOLOGIC_SHAPE_BAR_PADDING, Metrics.TILE_SIZE + Metrics.ZOOLOGIC_SHAPE_BAR_PADDING * 2, Metrics.TILE_SIZE, Metrics.TILE_SIZE, this.imanes);
    this.shapeBar = new ShapeBar('shapeBar', 0, 0, Metrics.ZOOLOGIC_SHAPE_BAR_WIDTH, Metrics.DEVICE_HEIGHT - Metrics.NAV_BAR_HEIGHT);
  }

  render() {
    return (
        <View style={style.container}>
          <View style={{backgroundColor: 'lightgrey', height: Metrics.DEVICE_HEIGHT - Metrics.NAV_BAR_HEIGHT, width: Metrics.BOARD_WIDTH, left: 0}}>
            <ShapeBarView key='shapeBar' shapeBar={this.shapeBar}/>
            {this.imanes.map((iman) =>
              <View key={iman.key}  style={{backgroundColor: 'black', width: 5, height: 5, left: iman.x, top: iman.y, position: 'absolute'}}/>
              )}
            <CuadraditoView cuadradito={this.cuadradito} color='red'/>
            <CuadraditoView cuadradito={this.cuadradito2} color='green'/>
            <CuadraditoView cuadradito={this.cuadradito3} color='green'/>
          </View>
        </View>
    )
  }

  generarMagnetos() {
    this.imanes = [];

    let tileSize = Metrics.TILE_SIZE;
    let startX = Metrics.ZOOLOGIC_SHAPE_BAR_WIDTH + Metrics.TILE_SIZE / 2;
    let startY = Metrics.NAV_BAR_HEIGHT + Metrics.TILE_SIZE / 2;

    for(i = startX; i <= startX + 4 * tileSize; i = i + tileSize){
      for (j = startY; j <= startY + 4 * tileSize; j = j + tileSize) {
        this.imanes.push({x: i, y: j, key: '' + i + '' + j})
      }
    }
  }
}


