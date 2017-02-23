/**
 * Created by jp on 2/22/2017.
 */

import React, { Component} from 'react';
import { View, StyleSheet, Animated, PanResponder, Dimensions, Text } from 'react-native';


var {width, height} = Dimensions.get('window');
var CELL_SIZE = Math.floor(width * .2); // 20% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;

export default class Tile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pan     : new Animated.ValueXY()
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder : () => true,
      onPanResponderMove           : Animated.event([null,{
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }]),
      onPanResponderRelease        : (e, gesture) => {
        Animated.spring(
          this.state.pan,
          {toValue:{x:0,y:0}}
        ).start();
      }
    });
  }

  render() {
    return (
      <View style={styles.draggableContainer}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.tileStyle]}>
          <Text style={styles.text}>Drag me!</Text>
        </Animated.View>
      </View>
    );
  }

}

let Window = Dimensions.get('window');

let styles = StyleSheet.create({
  text        : {
    marginTop   : 25,
    marginLeft  : 5,
    marginRight : 5,
    textAlign   : 'center',
    color       : '#fff'
  },
  draggableContainer: {
    position    : 'absolute',
    top         : Window.height/2 - TILE_SIZE,
    left        : Window.width/2 - TILE_SIZE,
  },
  tileStyle: {
    position: 'absolute',

    width: TILE_SIZE,
    height: TILE_SIZE,

    backgroundColor: '#e18dac',
    borderRadius: BORDER_RADIUS,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});