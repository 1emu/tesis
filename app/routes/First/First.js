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

        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>Navigate to second screen</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navAnimatedBars.bind(this)}>
          <Text>Navigate to animated bars</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.tiles.bind(this)}>
          <Text>Navigate to tiles</Text>
        </TouchableHighlight>
      </View>
    );
  }

  navSecond() {
    this.props.navigator.push({
      id: 'second'
    })
  }

  navAnimatedBars() {
    this.props.navigator.push({
      id: 'animatedBars'
    })
  }

  tiles() {
    this.props.navigator.push({
      id: 'tiles'
    })
  }

}