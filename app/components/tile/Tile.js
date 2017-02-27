/**
 * Created by jp on 2/22/2017.
 */
import React, {Component} from "react";
import {View, StyleSheet, Animated, PanResponder, Text, Dimensions} from "react-native";

import tileStyle from './style'

export default class Tile extends Component {

  constructor(props) {
    super(props);

    this.state = this._getState();
    this.panResponder = this._getPanResponder();
  }

  render() {

    let rotate = '0deg';
    let scale = this.state.scale;
    let rotationStyle = {transform: [{rotate}, {scale}]};

    const tileDimensions = {
      height: this.props.height,
      width: this.props.width,
      borderRadius:  Math.floor(this.props.width * .05) * 2,
    };


    return (
        <Animated.View {...this.panResponder.panHandlers} style={[this.state.pan.getLayout(), tileStyle.body, tileDimensions, rotationStyle]}>
          <Text style={tileStyle.text}>Tile</Text>
        </Animated.View>
    );
  }

  _getState() {
    return {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1)
    };
  }

  _getPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        this._scaleUp();
      },

      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),

      onPanResponderRelease: (e, gesture) => {
        this.state.pan.flattenOffset();
        this._scaleDown();
      }

    });
  }

  _scaleDown() {
    Animated.spring(
      this.state.scale,
      {toValue: 1, friction: 3}
    ).start();
  }

  _scaleUp() {
    Animated.spring(
      this.state.scale,
      {toValue: 1.1, friction: 3}
    ).start();
  }

}