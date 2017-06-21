import React, {Component, PropTypes} from "react";
import {View, Text, TouchableHighlight} from "react-native";
import scene from "../styles/scene"

export default class RushHourSuccessScreen extends React.Component {

  render() {
    return (
      <View style={scene.container}>
        <Text>Nivel {this.props.actualLevelNumber} finalizado</Text>

        <TouchableHighlight onPress={() => {this.chooseLevel(this.props.actualLevelNumber)}}>
          <Text>Replay: Nivel {this.props.actualLevelNumber}</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.chooseLevel(this.props.nextLevelNumber)}}>
          <Text>Next: Nivel {this.props.nextLevelNumber}</Text>
        </TouchableHighlight>

      </View>
    );
  }

  chooseLevel(levelNumber) {
    this.props.navigator.push({
      id: 'rush-hour-lvl',
      levelNumber: levelNumber
    });
  }
}
