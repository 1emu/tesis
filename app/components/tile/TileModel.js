/**
 * Created by jp on 5/22/17.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Animated} from 'react-native';
import {observable} from 'mobx';

export default class TileModel {

  @observable lulu;
  @observable pan;

  constructor(props) {
    let {lulu, width, height, x,  y, number} = props;
    this.lulu = lulu;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.number = number;
    this.pan = new Animated.ValueXY({x: x, y: y});
    this.layout = {x: 0, y: 0};
  }

  recordInitialLayout(){
    this.initialLayout = this.layout;
  }

}
