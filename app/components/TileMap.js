/**
 * Created by jp on 5/22/17.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {observable, computed, autorun} from 'mobx';
import TileView from './tile/TileView';

export default class TileMap {

  @observable tiles = [];
  containerLayout = {};

  constructor(tiles) {
    this.tiles = tiles;
    // autorun(() => console.log(this.report)); // que logguee el mapa cada vez que cambia algo
  }

  @computed get report() {
    if (this.tiles.length === 0) return '<none>';
    return '\nTileMap: ' + JSON.stringify(this.tiles)
      // + '\nContainer Layout: ' + JSON.stringify(this.containerLayout)
      + '\n';
  }

  render() {
    return this.tiles.map(
      (tile, key) => <TileView key={key} tileModel={tile} tileMap={this} />
    )
  }

  calculateLimits(tileModel) {
    let containerLeftMargin = this.containerLayout.x;
    let containerRightMargin = containerLeftMargin + this.containerLayout.width;
    let containerTopMargin = this.containerLayout.y;
    let containerBottomMargin = containerTopMargin + this.containerLayout.height;

    return {
      leftLimit: containerLeftMargin + tileModel.width * 0.5,
      rightLimit: containerRightMargin - tileModel.width * 0.5,
      topLimit: containerTopMargin + tileModel.height * 0.5,
      bottomLimit: containerBottomMargin - tileModel.height * 0.5
    };
  }

  _getCurrentCenterX() {
    return this.state.containerLeftMargin + this.state.tileModel.layout.x + this.props.tileModel.width * 0.5;
    return leftLimit + tileModel.layout.x;
  }

  calculateDX(gesture, tileModel) {
    console.log("Pan: " + JSON.stringify(tileModel.pan) + ' | Layout: ' + tileModel.layout.x + ' , ' + tileModel.layout.y + ' | Initial Layout ' + tileModel.initialLayout.x + ' , ' + tileModel.initialLayout.y);
    console.log('Gesture dx' + gesture.dx);

    let {leftLimit, rightLimit, topLimit, bottomLimit} = this.calculateLimits(tileModel);
    console.log('LL: ' + leftLimit + ' RL: ' + rightLimit + ' TL: ' + topLimit + ' BL: ' + bottomLimit);

    let tileInitialCenterX = leftLimit + tileModel.initialLayout.x;
    let resultingX = tileInitialCenterX + gesture.dx;

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if (resultingX > leftLimit && resultingX < rightLimit) return gesture.dx;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if (resultingX >= rightLimit) return 0; //tileModel.pan.x._value - tileModel.layout.x  * 0.5;

    //
    // if (resultingX <= leftLimit) return this.state.tileModel.pan.x._value - (actualX - leftLimit) * 0.5;

    // caso contrario, que no actualice su posición
    return tileModel.pan.x._value;
  }

  calculateDY(gesture, tileModel) {
    return gesture.dy;
  }
}
