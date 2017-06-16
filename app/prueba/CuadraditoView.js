import React, {Component} from "react";
import {View, Image, PanResponder, Animated} from "react-native";
import {observer} from "mobx-react/native"

@observer
export default class CuadraditoView extends Component {
  constructor(props) {
    super(props);
    this._setupPanResponder();
    this.state = {scale: new Animated.Value(1)};
  }

  render() {

    return (
        <Animated.Image
            {...this._panResponder.panHandlers}
            style={{width: this.props.cuadradito.width, height: this.props.cuadradito.height, backgroundColor: this.props.cuadradito.backgroundColor,
              left: this._currentX(), top: this._currentY(), position: 'absolute', transform: [{rotate: '0deg'}, {scale: this.state.scale}]
              }}

            source={this.props.cuadradito.image}
          />
    )
  }

  _currentX() {
    return this.props.cuadradito.x;
  }

  _currentY() {
    return this.props.cuadradito.y;
  }

  _setupPanResponder() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (_evt, gestureState) => {
        this._scaleDown();

        this.gestureStartX = this._currentX();
        this.gestureStartY = this._currentY();
      },
      onPanResponderMove: (evt, gestureState) => {
        let newX = this.gestureStartX + gestureState.dx;
        let newY = this.gestureStartY + gestureState.dy;
        this.props.cuadradito.pushTowards(newX, newY);
      },
      onPanResponderRelease: (e, gestureState) => {
        this.props.cuadradito.snapYoAss();
        this._scaleUp();
        this.props.cuadradito.checkWinCondition();
      }
    });
  }

  _scaleDown() {
    Animated.spring(
      this.state.scale,
      {toValue: 0.9, friction: 3}
    ).start();
  }

  _scaleUp() {
    Animated.spring(
      this.state.scale,
      {toValue: 1, friction: 3}
    ).start();
  }
}
