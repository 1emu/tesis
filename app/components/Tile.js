/**
 * Created by jp on 2/22/2017.
 */

import React, { Component } from 'react';
import { Animated } from 'react-native';


var {width, height} = require('Dimensions').get('window');
var CELL_SIZE = Math.floor(width * .2); // 20% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;

export default class Tile extends Component {

  constructor(props) {
    super(props);

    // this._x_centre = new Animated.Value(0);
    // this._y_centre = new Animated.Value(0);
    this.state = {
      color: '#e18dac',
    };
  }

  render() {
    const tileStyle = {
      position: 'absolute',
      backgroundColor: this.state.color,
      width: TILE_SIZE,
      height: TILE_SIZE,
      borderRadius: BORDER_RADIUS,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#BEE1D2',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    };

    return (
      <Animated.View style={tileStyle} />
    );
  }

}