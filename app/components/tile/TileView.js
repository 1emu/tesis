/**
 * Created by jp on 2/22/2017.
 */
import React, {Component} from "react";
import {View, StyleSheet, Animated, PanResponder, Text} from "react-native";
import tileStyle from "./style";
import {observable, observer, computed, autorun} from 'mobx';


export default class TileView extends Component {

  @computed get report() {
    return '======================\nTileView: ' + JSON.stringify(this.props.tileModel.pan);
  }

  constructor(props) {
    super(props);

    // autorun(() => console.log(this.report));

    let tileModel = this.props.tileModel;

    this.state = {
      tileModel: tileModel,
      scale: new Animated.Value(1),
      tileDimensions: {
        height: tileModel.height,
        width: tileModel.width,
        borderRadius: Math.floor(tileModel.width * .05) * 2,
      }
    };
    this.panResponder = this._getPanResponder();
  }

  render() {
    let rotate = '0deg';
    let scale = this.state.scale;
    let rotationStyle = {transform: [{rotate}, {scale}]};

    return (
      <Animated.View {...this.panResponder.panHandlers}
        style={[this.state.tileModel.pan.getLayout(), tileStyle.body, this.state.tileDimensions, rotationStyle]}
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
        let pan = this.state.tileModel.pan;

        pan.setOffset({x: pan.x._value, y: pan.y._value});
        pan.setValue({x: 0, y: 0});

        // guardamos la info al inicio del movimiento
        this.props.tileModel.recordInitialLayout()

        const tileModel = this.props.tileModel;
        tileModel.lulu++;

        this._scaleUp();
      },

      onPanResponderMove: (e, gesture) => {
        updateComand = this.props.tileMap.getUpdateCommandFor(this, gesture);

        return Animated.event([null, {
          dx: this.state.tileModel.pan.x,
          dy: this.state.tileModel.pan.y
        }])(e, updateComand);
      },

      onPanResponderRelease: (e, gesture) => {
        this.state.tileModel.pan.flattenOffset();
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