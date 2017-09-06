/**
 * Created by jp on 2/5/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './RushHourMainStyle'
import PlayerResults from "./PlayerResults";


export default class RushHourMainView extends Component {

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>RUSH HOUR</Text>

        <Icon.Button name="play-circle-filled" size={30} style={style.btn} onPress={() => this.startPlaying()}>
          <Text style={style.btnText}>COMENZAR</Text>
        </Icon.Button>

        <Icon.Button name="list" size={30} style={style.btn} onPress={() => this.chooseLevel()}>
          <Text style={style.btnText}>ELEGIR NIVEL</Text>
        </Icon.Button>

        <Icon.Button name="arrow-back" size={30} style={style.btn} onPress={() => this.goToGameSelection()}>
          <Text style={style.btnText}>VOLVER</Text>
        </Icon.Button>
      </View>
    );
  }

  startPlaying() {
    this.props.navigator.push({
      id: 'rush-hour-lvl',
      levelNumber: PlayerResults.firstLevelPending()
    });
  }

  chooseLevel() {
    this.props.navigator.push({id: 'rush-hour-level-selection'});
  }

  goToGameSelection() {
    this.props.navigator.resetTo({id: 'game-selection'});
  }
}
