/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, TouchableHighlight} from "react-native";

import scene from "../../styles/scene"

export default class First extends React.Component {

  render() {
    return (
      <View style={scene.container}>
        <Text>FIRST</Text>

        <TouchableHighlight onPress={this.chooseLevel.bind(this)}>
          <Text>Nivel 1</Text>
        </TouchableHighlight>
      </View>
    );
  }

  chooseLevel() {
    this.props.navigator.push({
      id: 'rush-hour-lvl',
      levelNumber: 1
    });
  }
}
