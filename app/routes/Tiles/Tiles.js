/**
 * Created by jp on 2/22/2017.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Dimensions} from 'react-native';
import {observer} from 'mobx-react/native'
import style from './style';
import scene from '../../styles/scene';
import tileMap from '../../components/TileMap'
import TileModel from '../../components/tile/TileModel';

var {width, height} = Dimensions.get('window');

const initialTiles = [
  new TileModel({lulu: 1, width: 40, height: 40, x: 50, y: 50, number: 1}),
  new TileModel({lulu: 88, width: 40, height: 40, x: 50, y: 100, number: 2})
];

export default class Tiles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      draggableTileContainerLayout: undefined,
      tileMap: new tileMap(initialTiles)
    };
  }

  render() {
    let windowDimensions = 'W: ' + width + ' H: ' + height;

    return (
      <View style={[style.container, {backgroundColor: '#37b451'}]}>
        <View style={scene.title}>
          <Text>Tiles | {windowDimensions}</Text>
          <TouchableHighlight onPress={this.props.navigator.pop}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>

        <View style={[style.tilesContainer]}>
          <View style={[style.draggableTileContainer, {width: width * 0.8, height: height * 0.8}]} onLayout={this.onLayout}>
            {this.state.tileMap.render()}
          </View>
        </View>
      </View>
    );
  }

  onLayout = event => {
    if (this.state.draggableTileContainerLayout) return;
    this.state.tileMap.containerLayout = event.nativeEvent.layout;
  };

};