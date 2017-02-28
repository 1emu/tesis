/**
 * Created by jp on 2/22/2017.
 */
import React, {Component} from "react";
import {View, StyleSheet, Animated, PanResponder, Text} from "react-native";
import tileStyle from "./style";

export default class Tile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      layout: {x: 0, y: 0}
    };
    this.panResponder = this._getPanResponder();
  }


  render() {
    let rotate = '0deg';
    let scale = this.state.scale;
    let rotationStyle = {transform: [{rotate}, {scale}]};

    const tileDimensions = {
      height: this.props.height,
      width: this.props.width,
      borderRadius: Math.floor(this.props.width * .05) * 2,
    };

    return (
      <Animated.View {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), tileStyle.body, tileDimensions, rotationStyle]}
        onLayout={this.onLayout}>
        <Text style={tileStyle.text}>{this._printInfo()}</Text>
      </Animated.View>
    );
  }


  componentWillReceiveProps(nextProps) {
    this.setState({parentLayout: nextProps.parentLayout ? nextProps.parentLayout : this.state.parentLayout})
  }

  _printInfo(){
    return 'x: ' + Number((this.state.layout.x).toFixed(1)) + ' y: ' + Number((this.state.layout.y).toFixed(1));
  }

  onLayout = event => {
    this.setState({layout: event.nativeEvent.layout});
  };

  _getParentX(){
    return this.state.parentLayout ? this.state.parentLayout.x : 0;
  }

  _getParentY(){
    return this.state.parentLayout ? this.state.parentLayout.y : 0;
  }

  _getParentWidth(){
    return this.state.parentLayout ? this.state.parentLayout.width : 0;
  }

  _getParentHeight(){
    return this.state.parentLayout ? this.state.parentLayout.height : 0;
  }

  _leftBorder(){
    return this._getParentX();
  }

  _rightBorder(){
    return this._getParentX() + this._getParentWidth();
  }

  _topBorder(){
    return this._getParentY();
  }

  _bottomBorder(){
    return this._getParentY() + this._getParentHeight();
  }

  _calculateDX(gesture){
    let resultingX = gesture.dx + this.state.layout.x;
    console.log('-----------------');
    console.log('GESTURE: x0 : ' + gesture.x0 + ' dx : ' + gesture.dx + ' moveX : ' + gesture.moveX);
    console.log('LAYOUT  x : ' + this.state.layout.x + ' pan x : ' + this.state.pan.x._value);
    console.log('RESULTING x : ' + resultingX + ' right border: ' + this._rightBorder());
    if(resultingX >= this._rightBorder()) return this.state.pan.x._value;
    return gesture.dx;
  }

  _getPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        this._scaleUp();
      },

      onPanResponderMove: (e, gesture) => {

        updateComand = {dx: this._calculateDX(gesture), dy: gesture.dy}

        return Animated.event([null, {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }])(e, updateComand) ;
      },


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