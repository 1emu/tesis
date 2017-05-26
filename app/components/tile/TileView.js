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

        updateComand = {dx: this.props.tileMap.calculateDX(gesture, this.props.tileModel), dy: this.props.tileMap.calculateDY(gesture, this.props.tileModel)}

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

  _calculateDY(gesture) {
    return gesture.dy;
    let {tileInitialCenterY, bottomLimit, topLimit} = this.state;
    let resultingY = tileInitialCenterY + gesture.dy;
    let actualY = this._getCurrentCenterY();

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if (resultingY > topLimit && resultingY < bottomLimit) return gesture.dy;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if (resultingY >= bottomLimit) return this.state.tileModel.pan.y._value + (bottomLimit - actualY) * 0.5;
    if (resultingY <= topLimit) return this.state.tileModel.pan.y._value - (actualY - topLimit) * 0.5;

    // caso contrario, que no actualice su posición
    return this.state.tileModel.pan.y._value;
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