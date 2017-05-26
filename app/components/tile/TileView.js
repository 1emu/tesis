/**
 * Created by jp on 2/22/2017.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Animated, PanResponder, Text} from 'react-native';
import tileStyle from './style';
import {observable, observer, computed, autorun} from 'mobx';


export default class TileView extends Component {

  constructor(props) {
    super(props);
    this.state = {scale: new Animated.Value(1)};
    this.panResponder = this._getPanResponder();
  }

  render() {
    let rotationStyle = {transform: [{rotate: '0deg'}, {scale: this.state.scale}]};

    return (
      <Animated.View {...this.panResponder.panHandlers}
                     style={[this.props.tileModel.pan.getLayout(), tileStyle.body, this.props.tileModel.tileDimensions, rotationStyle]}
                     onLayout={this.onLayout}>
        <Text>{this.props.tileModel.number}</Text>
      </Animated.View>
    );
  }

  onLayout = event => {
    this.props.tileModel.layout = event.nativeEvent.layout;
  };

  _getPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        let pan = this.props.tileModel.pan;
        pan.setOffset({x: pan.x._value, y: pan.y._value});
        pan.setValue({x: 0, y: 0});

        // guardamos la info al inicio del movimiento
        this.props.tileModel.recordInitialLayout();

        this._scaleUp();
      },

      onPanResponderMove: (e, gesture) => {
        updateComand = this.props.tileMap.getUpdateCommandFor(this.props.tileModel, gesture);

        return Animated.event([null, {
          dx: this.props.tileModel.pan.x,
          dy: this.props.tileModel.pan.y
        }])(e, updateComand);
      },

      onPanResponderRelease: (e, gesture) => {
        this.props.tileModel.pan.flattenOffset();
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