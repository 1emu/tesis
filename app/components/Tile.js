/**
 * Created by jp on 2/22/2017.
 */
import React, {Component} from "react";
import {View, StyleSheet, Animated, PanResponder, Text, Dimensions} from "react-native";

export default class Tile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),

      onPanResponderRelease: (e, gesture) => {
        this.state.pan.flattenOffset();
      }



    });
  }

  render() {

    const tileDimensions = {
      height: this.props.height,
      width: this.props.width,
      borderRadius:  Math.floor(this.props.width * .05) * 2,
    };

    return (
        <Animated.View {...this.panResponder.panHandlers} style={[this.state.pan.getLayout(), styles.tileStyle, tileDimensions]}>
          <Text style={styles.text}>Drag me!</Text>
        </Animated.View>
    );
  }

}

let styles = StyleSheet.create({
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff'
  },

  tileStyle: {
    position: 'absolute',
    backgroundColor: '#e18dac',
  },
});