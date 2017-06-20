/* @flow */

import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';

export default class Metrics extends React.Component {

  constructor(props) {
    super(props);
    let {width, height} = Dimensions.get('window');
    this.DEVICE_HEIGHT = height;
    this.DEVICE_WIDTH = width;

    this.IS_ANDROID = Platform.OS === 'android';

    this.BOARD_MARGIN = 20;
    this.BOARD_MARGIN_TOP = 100;
    this.BOARD_WIDTH = this.DEVICE_WIDTH - this.BOARD_MARGIN;
    this.TILE_SIZE = this.BOARD_WIDTH / 7;
    this.BOARD_HEIGHT = this.TILE_SIZE * 6;

    this.TILE_SHADOW_DEPTH = 6;
    this.TILE_BORDER_RADIUS = this.TILE_SIZE * 0.27;
    this.MAX_SPACE_IN_BETWEEN_TILES = this.TILE_SIZE * 0.1;
  }
}
