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
        <Text>ANIMATED BARS</Text>
        <TouchableHighlight onPress={this.navAnimatedBars.bind(this)}>
          <Text>Navigate to animated bars</Text>
        </TouchableHighlight>
        <Text>DRAG AND DROP</Text>
        <TouchableHighlight onPress={this.navDragAndDrop.bind(this)}>
          <Text>Navigate to drag and drop test</Text>
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

  navDragAndDrop() {
    this.props.navigator.push({
      id: 'dragAndDrop'
    })
  }
}