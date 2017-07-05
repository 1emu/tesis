/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import scene from '../../styles/scene'

export default class First extends React.Component {

  render() {
    return (
      <View style={scene.container}>
        <Text>RUSH HOUR</Text>

        <TouchableHighlight onPress={this.startPlaying.bind(this)}>
          <Text>Comenzar</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.chooseLevel.bind(this)}>
          <Text>Elegir nivel</Text>
        </TouchableHighlight>
      </View>
    );
  }

  startPlaying() {
    this.props.navigator.push({
      id: 'rush-hour-lvl',
      levelNumber: 1
    });
  }

  chooseLevel() {
    this.props.navigator.push({id: 'rush-hour-level-selection'});
  }
}
