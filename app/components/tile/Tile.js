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
      </Animated.View>
    );
  }


  componentWillReceiveProps(nextProps) {
    this.setState({parentLayout: nextProps.parentLayout ? nextProps.parentLayout : this.state.parentLayout})
    this.setState({containerLeftMargin: nextProps.parentLayout.x, containerRightMargin: nextProps.parentLayout.x + nextProps.parentLayout.width,
                   containerTopMargin: nextProps.parentLayout.y, containerBottomMargin: nextProps.parentLayout.y + nextProps.parentLayout.height})
  }

  _printInfo(){
    return 'x: ' + Number((this.state.layout.x).toFixed(1)) + ' y: ' + Number((this.state.layout.y).toFixed(1));
  }

  onLayout = event => {
    this.setState({layout: event.nativeEvent.layout});
  };

  _getParentY(){
    return this.state.parentLayout ? this.state.parentLayout.y : 0;
  }

  _getParentHeight(){
    return this.state.parentLayout ? this.state.parentLayout.height : 0;
  }

  _topBorder(){
    return this._getParentY();
  }

  _bottomBorder(){
    return this._getParentY() + this._getParentHeight();
  }

  _calculateDX(gesture){
    let {tileInitialRM, tileInitialLM, containerLeftMargin, containerRightMargin} = this.state;
    let resultingTileRM = tileInitialRM + gesture.dx;
    let actualTileRightM = containerLeftMargin + this.state.layout.x + this.props.width;
    let resultingTileLM = tileInitialLM + gesture.dx;
    let actualTileLeftM = containerLeftMargin + this.state.layout.x;

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if(resultingTileLM > containerLeftMargin && resultingTileRM < containerRightMargin) return gesture.dx;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if(resultingTileRM >= containerRightMargin) return this.state.pan.x._value + (containerRightMargin - actualTileRightM) * 0.5;
    if(resultingTileLM <= containerLeftMargin) return this.state.pan.x._value - (actualTileLeftM - containerLeftMargin) * 0.5;

    // caso contrario, que no actualice su posición
    return this.state.pan.x._value;
  }

  _calculateDY(gesture){
    let {tileInitialTM, tileInitialBM, containerTopMargin, containerBottomMargin} = this.state;
    let resultingTileBM = tileInitialBM + gesture.dy;
    let actualTileBottomM = containerTopMargin + this.state.layout.y + this.props.height;
    let resultingTileTM = tileInitialTM + gesture.dy;
    let actualTileTopM = containerTopMargin + this.state.layout.y;

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if(resultingTileTM > containerTopMargin && resultingTileBM < containerBottomMargin) return gesture.dy;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if(resultingTileBM >= containerBottomMargin)  return this.state.pan.y._value + (containerBottomMargin - actualTileBottomM) * 0.5;
    if(resultingTileTM <= containerTopMargin) return this.state.pan.y._value - (actualTileTopM - containerTopMargin) * 0.5;

    // caso contrario, que no actualice su posición
    return this.state.pan.y._value;
  }

  _getPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});

        // guardamos la info al inicio del movimiento
        let tileLeftM = this.state.containerLeftMargin + this.state.layout.x;
        let tileRightM = tileLeftM + this.props.width;
        let tileTopM = this.state.containerTopMargin + this.state.layout.y;
        let tileBottomM = tileTopM + this.props.height;
        this.setState({tileInitialLM: tileLeftM, tileInitialRM: tileRightM, tileInitialTM: tileTopM, tileInitialBM: tileBottomM});

        this._scaleUp();
      },

      onPanResponderMove: (e, gesture) => {

        updateComand = {dx: this._calculateDX(gesture), dy: this._calculateDY(gesture)}

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