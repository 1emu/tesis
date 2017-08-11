import React, {Component} from 'react';
import {View} from 'react-native';
import Metrics from '../Metrics';
import style from './TableroZoologicStyle'
import ShapeBar from './ShapeBar';
import ShapeBarView from './ShapeBarView';
import ZoologicPiece from './ZoologicPiece';
import ZoologicPieceView from './ZoologicPieceView';

export default class TableroZoologicView extends Component {
  constructor(props) {
    super(props);
    this.generarMagnetos();
    this.generarCuadraditos();
    this.shapeBar = new ShapeBar('shapeBar', 0, 0, Metrics.ZOOLOGIC_SHAPE_BAR_WIDTH, Metrics.DEVICE_HEIGHT - Metrics.NAV_BAR_HEIGHT);
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{backgroundColor: 'lightgrey', height: Metrics.DEVICE_HEIGHT - Metrics.NAV_BAR_HEIGHT, width: Metrics.BOARD_WIDTH, left: 0}}>
          <ShapeBarView key='shapeBar' shapeBar={this.shapeBar}/>
          {this.imanes.map((iman) =>
            <View key={iman.key} style={{backgroundColor: 'black', width: 5, height: 5, left: iman.x, top: iman.y, position: 'absolute'}}/>
          )}
          {this.pieces.map((piece) =>
            <ZoologicPieceView key={piece.id} cuadradito={piece}/>
          )}
        </View>
      </View>
    )
  }

  generarMagnetos() {
    this.imanes = [];

    let tileSize = Metrics.TILE_SIZE;
    let startX = Metrics.ZOOLOGIC_SHAPE_BAR_WIDTH + Metrics.TILE_SIZE / 2;
    let startY = Metrics.NAV_BAR_HEIGHT + Metrics.TILE_SIZE / 2;

    for (i = startX; i <= startX + 4 * tileSize; i = i + tileSize) {
      for (j = startY; j <= startY + 4 * tileSize; j = j + tileSize) {
        this.imanes.push({x: i, y: j, key: '' + i + '' + j})
      }
    }
  }

  generarCuadraditos() {
    let piecesX = Metrics.ZOOLOGIC_SHAPE_BAR_PADDING;
    let initialY = Metrics.ZOOLOGIC_SHAPE_BAR_PADDING;

    this.pieces = [
      new ZoologicPiece('red', piecesX, initialY, this.imanes),
      new ZoologicPiece('green', piecesX, Metrics.TILE_SIZE + piecesX * 2, this.imanes),
      new ZoologicPiece('blue', piecesX, Metrics.TILE_SIZE * 2 + piecesX * 3, this.imanes),
      new ZoologicPiece('purple', piecesX, Metrics.TILE_SIZE * 3 + piecesX * 4, this.imanes)
    ]
  }
}


