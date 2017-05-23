/**
 * Created by jp on 2/22/2017.
 */
import React, {Component} from "react";
import {View, StyleSheet, Animated, PanResponder, Text} from "react-native";
import tileStyle from "./style";
import {observable, observer, computed, autorun} from 'mobx';


export default class TileView extends Component {

  @observable lala = 1;

  @computed get report() {
    return 'TileView:  tile #' + this.props.tileModel.number + ' lala:' + this.lala;
  }

  constructor(props) {
    super(props);

    autorun(() => console.log(this.report));

    let initialX = this.props.tileModel.x ? this.props.tileModel.x : 0;
    let initialY = this.props.tileModel.y ? this.props.tileModel.y : 0;

    this.state = {
      pan: new Animated.ValueXY({x: initialX, y: initialY}),
      scale: new Animated.Value(1),
      layout: {x: 0, y: 0},
      tileDimensions: {
        height: this.props.tileModel.height,
        width: this.props.tileModel.width,
        borderRadius: Math.floor(this.props.tileModel.width * .05) * 2,
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
        style={[this.state.pan.getLayout(), tileStyle.body, this.state.tileDimensions, rotationStyle]}
        onLayout={this.onLayout}>
        <Text>{this.props.tileModel.number}</Text>
      </Animated.View>
    );
  }

  componentWillReceiveProps(nextProps) {
    let containerLeftMargin = nextProps.parentLayout.x;
    let containerRightMargin = containerLeftMargin + nextProps.parentLayout.width;
    let containerTopMargin = nextProps.parentLayout.y;
    let containerBottomMargin = containerTopMargin + nextProps.parentLayout.height;

    this.setState({
      containerLeftMargin: containerLeftMargin,
      containerTopMargin: containerTopMargin,
      leftLimit: containerLeftMargin + this.props.tileModel.width * 0.5,
      rightLimit: containerRightMargin - this.props.tileModel.width * 0.5,
      topLimit: containerTopMargin + this.props.tileModel.height * 0.5,
      bottomLimit: containerBottomMargin - this.props.tileModel.height * 0.5
    });
  }

  onLayout = event => {
    this.setState({layout: event.nativeEvent.layout});
  };

  _getPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});

        // guardamos la info al inicio del movimiento
        let tileInitialCenterX = this._getCurrentCenterX();
        let tileInitialCenterY = this._getCurrentCenterY();
        this.setState({tileInitialCenterX: tileInitialCenterX, tileInitialCenterY: tileInitialCenterY});

        this.lala++;

        const tileModel = this.props.tileModel;
        tileModel.lulu++;

        this._scaleUp();
      },

      onPanResponderMove: (e, gesture) => {

        updateComand = {dx: this._calculateDX(gesture), dy: this._calculateDY(gesture)}

        return Animated.event([null, {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }])(e, updateComand);
      },

      onPanResponderRelease: (e, gesture) => {
        this.state.pan.flattenOffset();
        this._scaleDown();
      }

    });
  }

  _calculateDX(gesture) {
    let {tileInitialCenterX, rightLimit, leftLimit} = this.state;
    let resultingX = tileInitialCenterX + gesture.dx;
    let actualX = this._getCurrentCenterX();

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if (resultingX > leftLimit && resultingX < rightLimit) return gesture.dx;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if (resultingX >= rightLimit) return this.state.pan.x._value + (rightLimit - actualX) * 0.5;
    if (resultingX <= leftLimit) return this.state.pan.x._value - (actualX - leftLimit) * 0.5;

    // caso contrario, que no actualice su posición
    return this.state.pan.x._value;
  }

  _calculateDY(gesture) {
    let {tileInitialCenterY, bottomLimit, topLimit} = this.state;
    let resultingY = tileInitialCenterY + gesture.dy;
    let actualY = this._getCurrentCenterY();

    // si el gesto esta dentro de los limites, que se mueva hacia el gesto
    if (resultingY > topLimit && resultingY < bottomLimit) return gesture.dy;

    // si el gesto se paso de los limites, pero el tile sigue dentro, que vaya hacia el gesto de a 1 unidad
    if (resultingY >= bottomLimit) return this.state.pan.y._value + (bottomLimit - actualY) * 0.5;
    if (resultingY <= topLimit) return this.state.pan.y._value - (actualY - topLimit) * 0.5;

    // caso contrario, que no actualice su posición
    return this.state.pan.y._value;
  }

  _getCurrentCenterX() {
    return this.state.containerLeftMargin + this.state.layout.x + this.props.tileModel.width * 0.5;
  }

  _getCurrentCenterY() {
    return this.state.containerTopMargin + this.state.layout.y + this.props.tileModel.height * 0.5;
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