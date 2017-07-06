/**
 * Created by jp on 2/5/2017.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../styles/scene'

export default class First extends React.Component {

  render() {
    return (
      <View style={style.container}>
        <Text>RUSH HOUR</Text>

        <Icon.Button name="play-circle-filled" size={30} style={style.btn} onPress={() => this.startPlaying()}>
          <Text style={style.btnText}>Comenzar</Text>
        </Icon.Button>

        <Icon.Button name="list" size={30} style={style.btn} onPress={() => this.chooseLevel()}>
          <Text style={style.btnText}>Elegir nivel</Text>
        </Icon.Button>
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
