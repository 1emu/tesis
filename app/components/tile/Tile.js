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

  _containerLeftMargin(){
    return this._getParentX();
  }

  _containerRightMargin(){
    return this._getParentX() + this._getParentWidth();
  }

  _topBorder(){
    return this._getParentY();
  }

  _bottomBorder(){
    return this._getParentY() + this._getParentHeight();
  }

  _calculateDX(gesture){
    this._logGesture(gesture);

    let resultingTileRM = this.state.tileInitialRM + gesture.dx;
    let actualTileRightM = this._containerLeftMargin() + this.state.layout.x + this.props.width;

    let resultingTileLM = this.state.tileInitialLM + gesture.dx;
    let actualTileLeftM = this._containerLeftMargin() + this.state.layout.x;

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if(resultingTileLM > this._containerLeftMargin() && resultingTileRM < this._containerRightMargin()) return gesture.dx;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if(resultingTileRM >= this._containerRightMargin()){
      if(actualTileRightM < this._containerRightMargin()) return this.state.pan.x._value + 1;
    }
    if(resultingTileLM <= this._containerLeftMargin()){
      if(actualTileLeftM > this._containerLeftMargin()) return this.state.pan.x._value - 1;
    }

    // caso contrario, que no actualice su posición
    return this.state.pan.x._value;
  }

  _logGesture(gesture) {
    let tileLeftM = this._containerLeftMargin() + this.state.layout.x;
    let tileRightM = this._containerLeftMargin() + this.state.layout.x + this.props.width;
    let resultingX = tileRightM + gesture.dx;

    console.log('-----------------');
    console.log('GESTURE: g0 : ' + gesture.x0 + ' dg : ' + gesture.dx + ' moveXg : ' + gesture.moveX);
    console.log('LAYOUT  x : ' + this.state.layout.x + ' pan x : ' + this.state.pan.x._value + ' Tile LM: ' + tileLeftM + ' Tile RM: ' + tileRightM);
    console.log('RESULTING resultingX : ' + resultingX + ' right border: ' + this._containerRightMargin());
    console.log('tileInitialRM: ' + this.state.tileInitialRM + ' dif tileInitialRM - g0: ' + (this.state.tileInitialRM - gesture.x0));
    console.log('X11: ' + (this.state.tileInitialRM + gesture.dx));
  }

  _getPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});

        // guardamos la info al inicio del movimiento
        let tileRightM = this._containerLeftMargin() + this.state.layout.x + this.props.width;
        let tileLeftM = this._containerLeftMargin() + this.state.layout.x;
        this.setState({tileInitialLM: tileLeftM, tileInitialRM: tileRightM});

        // this._scaleUp();
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
        // this._scaleDown();
        this._logGesture(gesture);
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